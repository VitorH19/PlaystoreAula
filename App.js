
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Cabecalho from './src/components/cabecalho'
import Botao from './src/components/botao'
import Jogos from './src/components/jogos'

import GAMES from './data/gamesData'
import APPS from './data/appsData'
import Destaque from './src/components/destaque'

const App = () => {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1 }}>
      <Cabecalho/>
      <Botao texto={'Apps'} cor={'#689f38'} logo={'apps-outline'} texto2={'Games'} logo2={'game-controller-outline'} cor2={'#107C10'}/>
      <Botao texto={'Movies'} cor={'#ed3b3b'} logo={'videocam-outline'} texto2={'Livros'} logo2={'book-outline'} cor2={'#039be5'}/>
      <View>
        <Text style={style.title}>Games</Text>
        <FlatList 
          horizontal={true}
          data={GAMES}
          keyExtractor = {item => item.id}
          renderItem={({item}) => (
            <Jogos
              titulo={item.name}
              valor={item.value}
              imagem={item.image}
            />
          )}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={style.title}>Apps</Text>
        <FlatList 
          horizontal={true}
          data={APPS}
          keyExtractor = {item => item.id}
          renderItem={({item}) => (
            <Jogos
              titulo={item.name}
              valor={item.value}
              imagem={item.image}
            />
          )}
        />
      </View>
      <Destaque imagem={'apexm-banner.jpg'} titulo="Apex Legends" price={0} rating={3}/>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#3d3d3d'
  }
})

export default App