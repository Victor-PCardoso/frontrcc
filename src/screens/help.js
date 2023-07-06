import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput, ScrollView } from "react-native";
import Header from "../Components/Header";
import { Routes } from "../routes";

const Help = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ajuda ao Usuário</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Conectar novos dispositivos
        </Text>
          <Text style={styles.text}>
            Alterar dados cadastrais
          </Text>
        </View>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006494',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,

    paddingHorizontal: 20,
  },
  textContainer: {
    backgroundColor: 'white',
    
    paddingHorizontal: 20,
    paddingVertical: 30,
    height:504,
    width:323,
    borderRadius:50
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Help;