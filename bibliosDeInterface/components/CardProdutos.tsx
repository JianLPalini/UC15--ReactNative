import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import Botao2 from './Botao2'
import Botao3 from './Botao3'
import { Card, Button, Text } from 'react-native-paper'

interface CardProdutosProps {
    id: number,
    titulo: string,
    imagem: string,
    preco: number,
    navigation: any
}

const CardProdutos = () => {
    return (

<Card>
  <Card.Cover source={{ uri: 'https://exemplo.com/foto.png' }} />
  <Card.Title title="Tênis Runner" subtitle="R$ 299" />
  <Card.Content>
    <Text produto="bodyMedium">Confortável, leve, ótimo pra corrida.</Text>
  </Card.Content>
  <Card.Actions>
    <Button>Comprar</Button>
  </Card.Actions>
</Card>
    )
}

export default CardProdutos

const styles = StyleSheet.create({
    containerexterno: {
        backgroundColor: 'black',
        width: "100%",


    },
    container: {
        backgroundColor: 'rgba(27, 31, 46, 1)',
        flexDirection: 'row',
        padding: 10,
        margin: 5,
        borderRadius: 20,
        width: "95%",
        height: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: 'orange',
        shadowOffset: { width: 4, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
    }
})