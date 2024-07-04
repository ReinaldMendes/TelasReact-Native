import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './assets/DeveloperDetailsStyles'; // Importa os estilos

const DeveloperDetails = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/developer.png')} // Path to the developer's image
        style={styles.image}
      />
      <Text style={styles.title}>Desenvolvedor Full Stack</Text>
      <Text style={styles.description}>
        Um desenvolvedor Full Stack é um profissional que trabalha tanto no front-end quanto no back-end de aplicações web. Eles têm conhecimento em várias linguagens de programação e são capazes de construir e manter sistemas completos.
      </Text>
      <Text style={styles.detail}>Empresa: Empresa ABC</Text>
      <Text style={styles.detail}>Localização: São Paulo, SP</Text>
      <Text style={styles.detail}>Salário: R$ 10.000,00</Text>
      <Text style={styles.detail}>Requisitos: React, Node.js, MongoDB, Express</Text>
    </View>
  );
};

export default DeveloperDetails;
