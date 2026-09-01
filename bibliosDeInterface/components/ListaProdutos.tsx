import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CardProdutos from '../components/CardProdutos'

type Produtos = {
  id: number
  titulo: string
  imagem: string
  preco: number
}

type ListaProdutosProps = {
  produtos: Produtos[]
  navigation:any
}

const ListaProdutos = ({ produtos, navigation }: ListaProdutosProps) => {
  return (
    <View style={{ width: '100%' }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <CardProdutos navigation={navigation} 
          id={item.id} titulo={item.titulo} imagem={item.imagem} preco={item.preco} />
        )}
      />
    </View>
  )
}

export default ListaProdutos

const styles = StyleSheet.create({})