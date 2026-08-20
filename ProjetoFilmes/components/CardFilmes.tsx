import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import Botao2 from './Botao2'
import Botao3 from './Botao3'

interface CardFilmesProps {
    id: number,
    titulo: string,
    imagem: string,
    nota: number,
    genero: string,
    navigation: any
}

const CardFilmes = ({ id, titulo, imagem, nota, genero, navigation }: CardFilmesProps) => {
    return (
        <View style={styles.containerexterno}>
            <View style={styles.container}>

                <Image style={styles.imagem} source={{ uri: imagem }} />

        <View style={styles.informações}>
                <Text style={styles.titulo}>Titulo: {titulo}</Text>
                <Text style={styles.genero}>Genêro: {genero}</Text>
                <View style={styles.botoes}>
                <Botao2 texto="Descrição" onPress={() => navigation.navigate('Sinopse')} />
                <Botao3 texto="Favoritos" onPress={() => navigation.navigate('Favoritos')} />
                    </View>
        </View>
            </View>
        </View>
    )
}

export default CardFilmes

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
    },

    titulo: {
        color: 'orange',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 6,
        marginBottom: 6
    },
    imagem: {
        margin: 6,
        backgroundColor: 'white',
        width: "25%",
        height: "100%",
        borderRadius: 8
    },
    nota: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    genero: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    id: {
    },
    informações: {
        flex: 1,
        marginLeft: 15
    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})