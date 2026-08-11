import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './botao';
import CardUsuario from './CardUsuario';
import ListaUsuarios from './ListaUsuarios';
import CardProduto from './CardProduto';
import ListaProdutos from './ListaProdutos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>LOJA DE ANIMES</Text>
      <ListaProdutos/>
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
});
