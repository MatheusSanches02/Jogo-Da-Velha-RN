import React from 'react'
import{
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Tabuleiro from './components/Tabuleiro'

export default class App extends React.Component{

  state ={
    quadrados: [1,2,3,4,5,6,7,8,9],
    tabuleiroDesabilitado: false 
  }

  render(){
    const { quadrados, tabuleiroDesabilitado } = this.state
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Jogo da Velha</Text>
        </View>
        <View style={styles.boardContainer}>
          <Tabuleiro
            quadrados = { quadrados }
            desabilitado = { tabuleiroDesabilitado }
          />
          <View>
            <Text style={styles.text}>Próximo => X</Text>
            <TouchableOpacity style={styles.textNovoJogo}>Novo Jogo?</TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textVencedor}>Vencedor X</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer:{
    height: 50,
    backgroundColor:'steelblue',
    alignItems:'center',
    justifyContent:'center'
  },
  titleText:{
    fontSize:30,
    color:'white'
  },
  boardContainer:{
    flex:1,
    marginTop:30
  },
  text:{
    fontSize:20,
    marginTop: 20,
    textAlign: 'center'
  },
  textNovoJogo:{
    fontSize:15,
    color:'gray',
    textAlign:'center',
    marginTop:30
  },
  textVencedor:{
    fontSize:20,
    marginTop:20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})