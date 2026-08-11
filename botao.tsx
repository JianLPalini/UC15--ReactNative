import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const botao = () => {
  return (
   <Image
      source={{ uri: 'https://i.redd.it/861gk9gqka0c1.png' }}
      style={styles.foto}
      resizeMode="cover"
    />
  )
}

export default botao

const styles = StyleSheet.create({
    foto:{
        height: 450,
        width: 450
    }
})