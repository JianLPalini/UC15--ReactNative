import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Teste = () => {
    return (
        <View>
           <Button icon="cannabis" mode="contained" onPress={() => console.log('Pressed')}>
                Cannabis
            </Button>
        </View>
    )
}

export default Teste

const styles = StyleSheet.create({})