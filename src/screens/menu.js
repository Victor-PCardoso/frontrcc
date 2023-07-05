import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './about';

function Menu({ navigation }){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.option}>
          <View>
            <Text>Opção 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View>
            <Text>Opção 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View>
            <Text>Opção 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <View>
            <Text>Opção 4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.option}>
          <View style={styles.optionContent}>
            <AntDesign name="infocirlceo" size={20} />
            <Text>Sobre o Aplicativo</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#006494',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    backgroundColor: 'white',
    marginTop: 15,
    width: 330,
    height: 51,
    borderRadius: 15,
  },
  optionContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;