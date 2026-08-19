import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

interface CardFilmesProps {
    id: number,
    titulo: string,
    imagem: string,
    nota: number,
    genero: string
}

const CardFilmes = ({ id, titulo, imagem, nota, genero }: CardFilmesProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.titulo}>Titulo: {titulo}</Text>
            <Image style={styles.imagem} source={{ uri: imagem }} />
            <Text style={styles.nota}>Nota: {nota}</Text>
            <Text style={styles.genero}>Genêro: {genero}</Text>
        </View>
    )
}

export default CardFilmes

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkblue',
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: 510,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: 'orange',
        shadowOffset: { width: 4, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
    },
    titulo: {
        color: 'orange',
        fontSize: 25,
        textAlign: 'center'
    },
    imagem: {
        margin: 6,
        backgroundColor: 'white',
        width: 250,
        height: 250,
        borderRadius: 8
    },
    nota: {
        color: 'white',
        fontSize: 20
    },
    genero: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    id: {
        color: 'orange'
    }
})