import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import Home from './src/screens/home';
import Header from './src/Components/Header';
import Chat from './src/screens/chat';
import { Routes } from './src/routes';

export default function App() {
  return (
  <Routes/>
  );
}

