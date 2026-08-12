import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './Botao';
import CardUsuario from './CardUsuario';
import ListaUsuarios from './ListaUsuarios';
import CardProduto from './CardProduto';
import ListaProdutos from './ListaProdutos';
import Buscar from './Buscar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOJA DE ANIMES</Text>
      <Buscar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'orange',
    marginBottom: 20,
    fontSize: 50,
    marginTop: 50
  }
});
