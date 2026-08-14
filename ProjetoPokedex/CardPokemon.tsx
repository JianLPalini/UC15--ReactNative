import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface CardProps {
    id: number,
    titulo: string,
    imagem: string,
    gif: string
}

const CardPokemon = ({ id, titulo, imagem, gif }: CardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.titulo}>Titulo: {titulo}</Text>
            <Image style={styles.imagem} source={{ uri: imagem }} />
            <Image style={styles.gif} source={{ uri: gif }} />
        </View>
    )
}

export default CardPokemon

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkblue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '8px 6px 10px orange'
    },
    titulo: {
        display: 'flex',
        justifyContent: 'center',
        color: 'orange',
        fontSize: 20
    },
    imagem: {
        margin: 10,
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 10
    },
    gif: {
        margin: 10,
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 10
    },
    id: {
        color: 'orange'
    }
})