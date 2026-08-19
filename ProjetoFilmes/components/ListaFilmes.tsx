import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CardFilmes from '../components/CardFilmes'

type Filmes = {
  id: number
  titulo: string
  imagem: string
  nota: number
  genero: string
}

type ListaFilmesProps = {
  filmes: Filmes[]
}

const ListaFilmes = ({ filmes }: ListaFilmesProps) => {
  return (
    <View>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <CardFilmes id={item.id} titulo={item.titulo} imagem={item.imagem} nota={item.nota} genero={item.genero} />
        )}
      />
    </View>
  )
}

export default ListaFilmes

const styles = StyleSheet.create({})