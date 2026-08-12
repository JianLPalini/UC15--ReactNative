import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Botao from './Botao'
import ListaProdutos from './ListaProdutos'

const dadosProduto = [
  { id: 1, titulo: 'Demon Slayer', link: 'https://poltronanerd.com.br/wp-content/uploads/2025/09/Imagem-Principal-Poltrona-Nerd-1-457x371.png', preco: 49.00 },
  { id: 2, titulo: 'Naruto', link: 'https://wallpapers.com/images/featured/o-naruto-mais-legal-1nbbrcie24kme10b.jpg', preco: 59.00 },
  { id: 3, titulo: 'Fire Force', link: 'https://www.einerd.com/wp-content/uploads/2025/02/fire-force.jpg', preco: 99.00 },
  { id: 4, titulo: 'Solo Leveling', link: 'https://i.pinimg.com/736x/ce/ed/25/ceed257ddf45959b40e48e860d3bb37d.jpg', preco: 80.50 },
  { id: 5, titulo: 'Sword Art Online', link: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/07/09/10/29/5095173.jpg', preco: 19.99 },
  { id: 6, titulo: 'Fairy Tail', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7T_RhrFAKpBHm0qaCdub9OvK5eDxPk7cQgZk4NIh1VA&s=10', preco: 29.99 },
  { id: 7, titulo: 'Blech', link: 'https://i.pinimg.com/736x/87/4d/69/874d6943bdf3fb496bb95d3de9a41cf5.jpg', preco: 49.00 },
  { id: 8, titulo: 'Pokemon', link: 'https://img.odcdn.com.br/wp-content/uploads/2025/03/pokemon-tipo-1920x1080.jpg', preco: 59.00 },
  { id: 9, titulo: 'DanDaDan', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbzmd-wYsOAsV6ICWkQIluq6lAdviL29k1SDlZQ9rWIHTpATD5KIvvUI&s=10', preco: 99.00 },
  { id: 10, titulo: 'YugiOh', link: 'https://www.quadrorama.com.br/wp-content/uploads/2022/08/Yu-Gi-Oh-f6cfb36d.png', preco: 80.50 },
  { id: 11, titulo: 'Cavaleiros dos Zodiacos', link: 'https://m.media-amazon.com/images/M/MV5BN2EyODU0ZWEtZmU3Ni00NjliLTg4ZWEtMTY3NGVmOWJmNjQxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', preco: 19.99 },
  { id: 12, titulo: 'Castlevania', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZnzQHMqqT9Qy9OJORr-Bg-bBf3kEE3mRfYY77GSGPYQxl10vGR_cbnI&s=10', preco: 29.99 },
]

const Buscar = () => {

  const [procurar, setProcurar] = useState("")
  const [encontrados, setEncontrados] = useState(dadosProduto)

  const handleBuscar = () => {
    const resultado = dadosProduto.filter((item) =>
      item.titulo.toLowerCase().includes(procurar.toLowerCase())
    )
    setEncontrados(resultado)
  }

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.text}>Buscar Produtos :</Text>
        <TextInput
          style={styles.input}
          value={procurar}
          onChangeText={setProcurar}
          placeholder="Digite o produto"
          placeholderTextColor="#ccc"
        />
        <Botao texto="Procurar" onPress={handleBuscar} />
      </View>

      <ListaProdutos produtos={encontrados} />
    </View>
    </ScrollView>
  )
}

export default Buscar

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkblue',
        width: 600,
        height: 150,
        boxShadow: '8px 4px 10px orange',
        marginBottom: 30,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    text: {
        fontSize: 20,
        color: 'white',
        padding: 10
    }
})