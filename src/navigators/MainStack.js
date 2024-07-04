import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginStack from "../pages/LoginStack";
import Principal from "../pages/Principal";
import DeveloperDetails from "../pages/DeveloperDetails"; // Certifique-se de que este caminho está correto

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#00FFFF',
        height: 50,
      },
      headerTitleStyle: {
        color: '#ff2',
        fontSize: 23,
        fontWeight: 'bold',
      },
    }}
  >
    <MainStack.Screen
      name="Home"
      component={LoginStack}
      options={{
        title: 'Inicio',
      }}
    />
    <MainStack.Screen
      name="Principal"
      component={Principal}
      options={({ route }) => ({
        // Customize if needed
      })}
    />
    <MainStack.Screen
      name="DeveloperDetails"
      component={DeveloperDetails}
      options={{
        title: 'Detalhes do Desenvolvedor',
      }}
    />
  </MainStack.Navigator>
);

export default MainStackScreen;
