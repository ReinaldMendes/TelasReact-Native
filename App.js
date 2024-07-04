// React Navigation tem 3 rotas : Stack navigation *conversas, Tab navigation *barra inferior , Drawer navigation : o deslizar o dedo da borda esquerda para direita
import React from 'react'
import{NavigationContainer} from '@react-navigation/native';
 
import MainStack from './src/navigators/MainStack';

function App(){
  return(
    <NavigationContainer>
    <MainStack/>
    </NavigationContainer> //npm install @react-navigation/stack
  );
}
export default App;
