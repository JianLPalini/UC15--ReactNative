import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Botao from '../components/Botao'
import ListaFilmes from '../components/ListaFilmes'


// Tipo do que a API realmente devolve (evita re-fetch por item)
interface ShowTVMaze {
  id: number
  name: string
  genres: string[]
  rating: { average: number | null }
  image: { medium: string; original: string } | null
}

interface Filme {
  id: number
  titulo: string
  imagem: string
  nota: number
  genero: string
}



const Home = ({ navigation }: any) => {
  const [todosFilmes, setTodosFilmes] = useState<ShowTVMaze[]>([])
  const [nome, setNome] = useState("")
  const [encontrados, setEncontrados] = useState<Filme[]>([]) // <- mock aqui, antes era []
  const [carregando, setCarregando] = useState(false) // <- false aqui, antes era true (travava pra sempre)

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch("https://api.tvmaze.com/shows")
        const dados: ShowTVMaze[] = await resposta.json()
        setTodosFilmes(dados)
      } catch (erro) {
        console.error('Erro ao buscar lista de filmes:', erro)
      } finally {
        setCarregando(false)
      }
    }

    buscarFilmes()
  }, [])

  const handleBuscar = () => {
    const filtrados = todosFilmes.filter((item) =>
      item.name.toLowerCase().includes(nome.toLowerCase())
    )

    const resultado: Filme[] = filtrados.map((item) => ({
      id: item.id,
      titulo: item.name,
      imagem: item.image?.medium ?? '',
      nota: item.rating?.average ?? 0,
      genero: item.genres.join(', '),
    }))

    setEncontrados(resultado)
  }
    

  return (
    <ScrollView>
      <View style={{ marginTop: 50 }}>
        <Button title='Ir para Favoritos' onPress={() => navigation.navigate('Favoritos')} />
      </View>
      <View style={{ marginTop: 50 }}>
        <Button title='Ir para Perfil' onPress={() => navigation.navigate('Perfil')} />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.container}>
          <Text style={styles.text}>Buscar Filmes :</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite o nome do filme"
            placeholderTextColor="#ccc"
          />
          <Botao texto="Procurar" onPress={handleBuscar} />
        </View>
    
        {carregando ? <Text>Carregando...</Text> : <ListaFilmes filmes={encontrados} />}
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    width: '90%',
    maxWidth: 600,
    height: 130,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 6,
    shadowColor: 'orange',
    shadowOffset: { width: 8, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  input: {
    textAlign: 'center',
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    color: 'white'
  },
  text: { fontSize: 20, color: 'white', padding: 10 }
})