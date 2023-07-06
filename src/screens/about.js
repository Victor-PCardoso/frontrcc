import { StyleSheet, View, Text, SafeAreaView, FlatList, TextInput, ScrollView } from "react-native";
import Header from "../Components/Header";

const About = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sobre o App</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Lisa</Text> vem com o intuito de <Text style={styles.boldText}>otimizar</Text> a vida de usuários que necessitem estar no controle o tempo todo de seus <Text style={styles.boldText}>dispositivos</Text>. 
          </Text>
          <Text style={styles.text}>
            Sua <Text style={styles.boldText}>acessibilidade</Text> consegue se estender até para PCDs visuais! Pois toda sua interação é feita por reconhecimento de voz!
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
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 20,
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

export default About;