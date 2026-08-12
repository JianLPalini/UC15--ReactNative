import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface BotaoProps {
  texto?: string
  onPress?: () => void
}

const Botao = ({ texto = 'Procurar', onPress }: BotaoProps) => {
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

export default Botao

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  botao: {
    width: 100,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center',         
    justifyContent: 'center',    
  },
  text: {
    fontSize: 20,
    color: 'white',
    padding: 10
  }
})