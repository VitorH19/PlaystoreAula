import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'

const Jogos = ({ titulo, valor, imagem }) => {
  return (
    <TouchableOpacity style={style.containerJogos}>
      <Image
        style={style.image}
        source={require(`../../../imagens/${imagem}`)}
      />
      <Text style={style.titulo}>{titulo}</Text>
      <Text style={style.valor}>{valor ? '$' + valor : 'free'}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  containerJogos: {
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    marginTop: 8,
    padding: 10,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
    height: 150,
    marginLeft: 8
  },
  titulo: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold'
  },
  valor: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 75,
    borderRadius: 3
  }
})

export default Jogos