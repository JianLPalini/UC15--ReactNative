import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CardProduto from './CardProduto'


const dadosProduto = [
    {id:"1", titulo: 'Demon Slayer', link: 'https://poltronanerd.com.br/wp-content/uploads/2025/09/Imagem-Principal-Poltrona-Nerd-1-457x371.png', preco: '49.00'},
    {id:"2", titulo: 'Naruto', link: 'https://wallpapers.com/images/featured/o-naruto-mais-legal-1nbbrcie24kme10b.jpg', preco: '59.00'},
    {id:"3", titulo: 'Fire Force', link: 'https://www.einerd.com/wp-content/uploads/2025/02/fire-force.jpg', preco: '99.00'},
    {id:"4", titulo: 'Solo Leveling', link: 'https://i.pinimg.com/736x/ce/ed/25/ceed257ddf45959b40e48e860d3bb37d.jpg', preco: '80.50'},
    {id:"5", titulo: 'Sword Art Online', link: 'https://br.web.img3.acsta.net/c_310_420/pictures/19/07/09/10/29/5095173.jpg', preco: '19.99'}
]


const ListaProdutos = () => {
  return (
    <View>
      <FlatList
        data={dadosProduto} 
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({item}) => (
          <CardProduto id={Number(item.id)} titulo={item.titulo} link={item.link} preco={Number(item.preco)} />
        )}
      />
    </View>
  )
}

export default ListaProdutos

const styles = StyleSheet.create({})