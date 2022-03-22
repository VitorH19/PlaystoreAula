
import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao texto={'Xbox'} cor={'#107C10'} logo={"logo-xbox"} texto2={'PlayStation'} logo2={'logo-playstation'} cor2={'#003791'}/>
     </View>
  );
}
