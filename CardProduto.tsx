import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface CardPromps {
    id:number,
    titulo:string,
    link:string,
    preco:number
}

const CardProduto = ({id, titulo, link, preco}: CardPromps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.titulo}>Titulo: {titulo}</Text>
      <Image style={styles.link} source={{ uri: link }} />
      <Text style={styles.preco}>Preco: R$ {preco} </Text>
    </View>
  )
}

export default CardProduto

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        display: 'flex',
        justifyContent: 'center',
        color: 'orange',
        fontSize: 20
    },
    link:{
        margin: 10,
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 10
    },
    preco:{
        display: 'flex',
        justifyContent: 'center',
        color: 'orange',
        fontSize: 20
    },
    id:{
        color: 'orange'
    }
})