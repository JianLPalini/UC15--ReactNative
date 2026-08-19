import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Sinopse = ({navigation}:any) => {
  return (
    <View>
      <Text>Sinopse</Text>
            <Button
              title='Ir para Home'
              onPress={() => navigation.navigate('Home')}
            />
    </View>
  )
}

export default Sinopse

const styles = StyleSheet.create({})