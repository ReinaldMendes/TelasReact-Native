import React, { useState } from "react";
import JobItem from './JobItem';
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import styles from './assets/PrincipalStyles'; // Import the styles

const { width } = Dimensions.get('window');

const Principal = () => {
  const navigation = useNavigation();
  const [nameField, setNameField] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')} // Path to the logo image
          style={styles.logo}
        />
        <Text style={styles.title}>Vagas de Emprego</Text>
        <Text style={styles.subtitle}>Buscar Vaga</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua vaga"
          placeholderTextColor="#999"
          value={nameField}
          onChangeText={(text) => setNameField(text)}
        />
        <Text style={styles.typingText}>Você está digitando: {nameField}</Text>

        <JobItem 
          title="Desenvolvedor Full Stack"
          company="Empresa ABC"
          location="São Paulo, SP"
          onPress={() => navigation.navigate('DeveloperDetails')}
        />
        <JobItem
          title="Designer Gráfico"
          company="Empresa XYZ"
          location="Rio de Janeiro, RJ"
          onPress={() => Alert.alert('Aproveite a vaga de Designer Gráfico')}
        />
        <JobItem
          title="Gerente de Projetos"
          company="Empresa 123"
          location="Belo Horizonte, MG"
          onPress={() => Alert.alert('Aproveite a vaga de Gerente de Projetos')}
        />
        <JobItem
          title="Analista de Marketing Digital"
          company="Empresa QWE"
          location="Porto Alegre, RS"
          onPress={() => Alert.alert('Aproveite a vaga de Analista de Marketing Digital')}
        />
      </View>
    </ScrollView>
  );
};

export default Principal;
