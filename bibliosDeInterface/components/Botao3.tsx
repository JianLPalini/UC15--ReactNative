import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Botao3Props {
  texto?: string
  onPress?: () => void
}

const Botao3 = ({ texto = 'Descrição', onPress }: Botao3Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Text style={styles.text}>{texto}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Botao3

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  botao: {
    width: 60,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',         
    justifyContent: 'center',    
  },
  text: {
    fontSize: 10,
    color: 'white',
    padding: 10
  }
})