import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Botao from './Botao';

const card1 = () => {
  return (
    <View style={styles.card1}>
      <Text>LOJA DE ANIMES</Text>
      <Botao/>
    </View>
  )
}

export default card1

const styles = StyleSheet.create({
    card1:{
        backgroundColor: 'white',
        maxWidth: 10,
        height: 450,
        width: 450
    }
})