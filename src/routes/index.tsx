import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo } from '@expo/vector-icons';

import Home from '../screens/home';
import Chat from '../screens/chat';
import Menu from '../screens/menu';
import Header from '../Components/Header';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          header: () => <Header />,
          tabBarStyle: { backgroundColor: colors.primary }, // Define a cor de fundo da BottomTabBar
          tabBarActiveTintColor: 'white', // Define a cor dos ícones e do texto das guias ativas
          tabBarInactiveTintColor: 'black', // Define a cor dos ícones e do texto das guias inativas
        }}
      >
        <Screen
          name="Conectados"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="link" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="mic" color={color} size={size} />
            ),
          }}
        />
        <Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="menu" color={color} size={size} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}