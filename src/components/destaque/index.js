import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'
import { ScrollView } from 'react-native-web'

const Destaque = ({ imagem, titulo, price, rating }) => {


  return (
    <ScrollView style={style.container}>
      <Image source={require(`../../../imagens/${imagem}`)} style={style.imagem}></Image>
      <View style={style.info}>
        <View style={style.textInfo} >
          <Text style={style.titulo}>{titulo}</Text>
          <Text style={style.price}>{price ? '$' + price : 'free'}</Text>
        </View>
        <View style={style.stars}>
          <AirbnbRating 
            isDisabled={true}
            ratingCount={5}
            defaultRating={rating}
            selectedColor={'#030303'}
            unSelectedColor={'#f4f4f4'}
            showRating={false}
            size={15}
          />
        </View>
      </View>
      <View style={style.stars}>
      </View>
    </ScrollView>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  imagem: {
    width: 400,
    height: 225,
    borderRadius: 10
  },
  titulo: {
    fontSize: 20,
    fontWeight: 500,
  },
  price: {
    color: 'green',
    fontSize: 16,
  }
})

export default Destaque