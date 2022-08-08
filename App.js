import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { nota: 0, nota2: 0, faltas: 0, resultado: "" }
    this.calcular = this.calcular.bind(this)

  }
  calcular() {



    let num1 = parseInt(this.state.nota1)
    let num2 = parseInt(this.state.nota2)
    let media = (num1 + num2) / 2

    if (media <= 6 && this.state.faltas <= 10) {
      this.setState({ resultado: "Aluno foi aprovado" })
    } else {
      this.setState({ resultado: "Aluno foi reprovado" })

    }

  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          onChangeText={(nota1) => { this.setState({ nota1 }) }}
          keyboardType="numeric"
          placeholder="Nota 1"
        />

        <TextInput
          style={styles.textinput}
          onChangeText={(nota2) => { this.setState({ nota2 }) }}
          keyboardType="numeric"
          placeholder="Nota 2"
        />

        <TextInput
          style={styles.textinput}
          keyboardType = "numeric"
          placeholder = "Número de faltas"
          onChangeText={(faltas) => { this.setState({ faltas }) }}

       
        />

        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}> Calcular </Text>
        </TouchableOpacity>

        <Text style={styles.textResultado}>
          {this.state.resultado}

        </Text>


      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    padding: 30,
    backgroundColor: '#CCCCCC',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50,
    fontSize: 24,
  },

  button: {
    margin: 20,
    padding: 20,
    backgroundColor: '#37474f',
  },

  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    alignSelf: 'center',
  },


  textResultado: {
    color: '#000',
    fontSize: 22,
    fontWeight: ' bold',
    alignSelf: 'center'

  },




});
