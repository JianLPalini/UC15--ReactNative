import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardUsuario from './CardUsuario'


const dadosUsuario = [
    {id:"1", nome: 'Jian', email: 'jian@gmail'},
    {id:"2", nome: 'Erica', email: 'erica@gmail'},
    {id:"3", nome: 'Sid', email: 'sid@gmail'},
    {id:"4", nome: 'Luiz', email: 'luiz@gmail'},
    {id:"5", nome: 'Miguel', email: 'miguel@gmail'}
]
// O componente FlatList renderiza dados de forma dinâmica
// Ou seja, ele lê dados do banco ou de um array, por exemplo,
// e consegue criar cards com estes dados, sem precisarmos criar um por um na mão.

const ListaUsuarios = () => {
  return (
    <View>
      <FlatList
        data={dadosUsuario} // de onde ele importa os dados 
        keyExtractor={(item) => item.id} // identifica qual a chave que diferencia cada item
        // diz o que fazer com cada item, como renderizar ele
        renderItem={({item}) => (
          <CardUsuario id={Number(item.id)} nome={item.nome} email={item.email} />
        )}
      />
    </View>
  )
}

export default ListaUsuarios

const styles = StyleSheet.create({})