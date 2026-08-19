import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Perfil = ({navigation}:any) => {
  return (
    <View>
      <Text>Perfil</Text>
            <Button
              title='Ir para Home'
              onPress={() => navigation.navigate('Home')}
            />
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({})