import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#00FFFF',
  },
  container: {
    width: width * 0.9,
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: '#00FFFF',
    padding: 20,
    borderRadius: 8,
  },
  logo: {
    width: 100, // Ajuste o tamanho da imagem conforme necessário
    height: 100, // Ajuste o tamanho da imagem conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 19,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    backgroundColor: "#FFFF00",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  typingText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default styles;
