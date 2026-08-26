import { ActivityIndicator, Alert, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker, Region } from "react-native-maps";

const MapaUsuario = () => {
  // pega a localização
  const [localizacao, setLocalizacao] = useState<Region>();
  // array com as coordenadas de cada pin
  const [pins, setPins] = useState<{ latitude: number; longitude: number }[]>([]);

  const permissao = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Para usar o mapa você precisa permitir a geolocalização");

      return false;
    }

    return true;
  };

  const pegarPosicao = async () => {
    const posicao = await Location.getCurrentPositionAsync({});

    setLocalizacao({
      latitude: posicao.coords.latitude,
      longitude: posicao.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const adicionarPin = (coordenada: {latitude: number; longitude: number;}) => {
    setPins([...pins, coordenada]);
  };

  useEffect(() => {
    permissao();
    pegarPosicao();
  }, []);

  if (!localizacao) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <MapView
      style={styles.mapa}
      initialRegion={localizacao}
      showsUserLocation={true}
      onPress={(toque) => {
        // toque = objeto com a informações sobre o lugar onde o usuário tocou no mapa
        // nativeEvent = objeto que contém as informações do toque
        // coordinate = pega especificamente a latitude e longitude do local tocado
        adicionarPin(toque.nativeEvent.coordinate);
      }}
    >
      {pins.map((pin, index) => (
        <Marker key={index} coordinate={pin} title={`Pin ${index + 1}`} />
      ))}
    </MapView>
  );
};

export default MapaUsuario;

const styles = StyleSheet.create({
  mapa: {
    flex: 1,
    width: "100%",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});