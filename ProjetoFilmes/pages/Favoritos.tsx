import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Favoritos = ({navigation}:any) => {
  return (
    <View>
      <Text>Favoritos</Text>
            <Button
              title='Ir para Home'
              onPress={() => navigation.navigate('Home')}
            />
    </View>
  )
}

export default Favoritos

const styles = StyleSheet.create({})