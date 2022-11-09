import React from "react";
import { Image, StyleSheet, Text, View, Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/gg.png')} style={styles.profile} />
      <Text style={styles.name}>
        Gabriel Feijó -
        <Text style={styles.age}> 20 </Text>
      </Text>
      <Text style={styles.text}>
        • Sobre: Faz parte do programa Embarque Digital, um programa educacional de fomento à formação de capital humano especializado na área de Tecnologia da Informação e Comunicação na Cidade de Recife. Atualmente está cursando o 3º período de Análise e Desenvolvimento de Sistemas na Faculdade Senac Pernambuco.
      </Text>
      <Text style={styles.text}>
        • Linguagens: HTML, CSS, JS, JAVA, PHP.
      </Text>
      <Text style={styles.text}>
        • Bancos de dados: SQL, MYSQL, PostgreSQL, MongoDB.
      </Text>
      <Text style={styles.text}>
        • Frase que define: "Fazer o melhor na condições que tem enquanto não tem condições melhores pra fazer melhor ainda."
      </Text>
      <View style={styles.images}>
        <Text onPress={() => Linking.openURL('https://github.com/GabrielFeijo')}>
          <Image source={require('./assets/github.png')} style={styles.icons} ></Image>
        </Text>
        <Text onPress={() => Linking.openURL('https://www.linkedin.com/in/gabriel-feijo/')}>
          <Image source={require('./assets/linkedin.png')} style={styles.icons}></Image>
        </Text>
        <Text onPress={() => Linking.openURL('mailto:gabrielsfeijo@fac.pe.senac.br')}>
          <Image source={require('./assets/email.png')} style={styles.icons}></Image>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B27',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: '#628FDB'
  },
  name: {
    color: "#C9D1D9",
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20
  },
  age: {
    color: '#628FDB'
  },
  text: {
    fontSize: 17,
    color: '#FFF',
    maxWidth: 400,
    textAlign: 'justify',
    fontFamily: 'Verdana',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  social: {
    fontSize: 17,
    color: '#FFF'
  },
  images: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 250,
    justifyContent: 'space-around',
    marginTop: 20
  },
  icons: {
    width: 50,
    height: 50,
    color: "#FFF"
  }
});