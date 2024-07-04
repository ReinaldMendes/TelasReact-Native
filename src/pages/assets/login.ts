import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    width: width * 0.9,
    maxWidth: 400,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputArea: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputField: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  aditionals: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotBtnArea: {
    alignItems: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    color: '#007BFF',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 14,
    marginRight: 5,
  },
  signUpBtnText: {
    fontSize: 14,
    color: '#007BFF',
  },
  footerArea: {
    alignItems: 'center',
  },
  footerA: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default styles;
