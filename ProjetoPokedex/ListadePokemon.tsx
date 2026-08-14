import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CardPokemon from './CardPokemon'

type Pokemon = {
  id: number
  titulo: string
  imagem: string
  gif: string
}

type ListaPokemonProps = {
  pokemons: Pokemon[]
}

const ListaPokemon = ({ pokemons }: ListaPokemonProps) => {
  return (
    <View>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <CardPokemon id={item.id} titulo={item.titulo} imagem={item.imagem} gif={item.gif} />
        )}
      />
    </View>
  )
}

export default ListaPokemon

const styles = StyleSheet.create({})