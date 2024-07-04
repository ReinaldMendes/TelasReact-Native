import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'#fff',
    paddingHorizontal:15,
    paddingTop:40
  },

  logo: {
    height: 128,
    width: 128,
  
  },
  h1:{
    color:'#000',
    fontSize:27,
    fontWeight:'bold',
    marginVertical:10
  },
  h2:{
    color:'#999',
    fontSize:15
  },
  inputArea:{
    width: '100%',
    paddingTop:20
  },
  inputLabel:{
    color:'#777',
    fontSize:14,
    fontWeight: 'bold',
    marginBottom:7
  },
  inputField:{
    borderWidth:2,
    borderRadius:5,
    borderColor:'#238E68',
    fontSize:15,
    padding:10
  },
  aditionals:{
    width:'100%'
  },
  forgotBtnArea:{
    paddingVertical:20,
    alignSelf:'flex-end'
  },
  forgotBtnText:{
    fontSize: 14,
    fontWeight:'bold',
    color:'#238E68'
  },
  button:{
    backgroundColor:'#238E68',
    width:'100%',
    padding:10,
    borderRadius:5
  },
  buttonText:{
    alignSelf:'center',
    color:'#fff',
    fontSize:16
  },
  signUpArea:{
    flexDirection:'row',
    marginTop:30
  },
  signUpText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#999'
  },
  signUpBtnText:{
    fontSize:13,
    fontWeight:'bold',
    color:'#238E68',
    marginLeft:5
  },
  footerArea:{
    marginVertical:30
  },
  footerA:{
    fontSize:13,
    color: '#999',
    textDecorationLine: "underline"
  },
  container: {
    margin: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
    borderRadius: 8,
     alignItems: 'center'
  },
 
underline: {
    textDecorationLine: "underline",
  },
  company: {
    fontSize: 16,
    color: "#666",
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  

  subtitle:{
    fontSize: 19,
    color: '#238E68',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});