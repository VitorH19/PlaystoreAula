
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Cabecalho from './src/components/cabecalho'
import Botao from './src/components/botao'
import Jogos from './src/components/jogos'

import GAMES from './data/gamesData'

function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho/>
      <Botao texto={'Apps'} cor={'#689f38'} logo={'apps-outline'} texto2={'Games'} logo2={'game-controller-outline'} cor2={'#107C10'}/>
      <Botao texto={'Movies'} cor={'#ed3b3b'} logo={'videocam-outline'} texto2={'Livros'} logo2={'book-outline'} cor2={'#039be5'}/>
      <View>
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
    </View>
  )
}

export default App