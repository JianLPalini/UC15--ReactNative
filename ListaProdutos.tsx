import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CardProduto from './CardProduto'

type Produto = {
  id: number
  titulo: string
  link: string
  preco: number
}

type ListaProdutosProps = {
  produtos: Produto[]
}

const ListaProdutos = ({ produtos }: ListaProdutosProps) => {
  return (
    <View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <CardProduto id={item.id} titulo={item.titulo} link={item.link} preco={item.preco} />
        )}
      />
    </View>
  )
}

export default ListaProdutos

const styles = StyleSheet.create({})