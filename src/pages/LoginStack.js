import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './assets/login'; // Import the styles

const { width, height } = Dimensions.get('window');

const LoginStack = () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleLoginButton = () => {
    alert(emailField);
    alert(passwordField);
    navigation.navigate('Principal', {
      cor: 'someColor', // replace 'someColor' with the actual color if needed
    });
  };

  const handleForgetButton = () => {
    // Add forget password functionality here
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.subtitle}>Infoconectados</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            autoCapitalize="none"
            keyboardType="email-address"
            value={emailField}
            onChangeText={setEmailField}
          />
        </View>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.inputField}
            placeholder="*********"
            placeholderTextColor="#999"
            secureTextEntry
            value={passwordField}
            onChangeText={setPasswordField}
          />
        </View>
        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgetButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerArea}>
          <Text style={styles.footerA}>Criado por Reinald</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginStack;
