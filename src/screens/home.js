import { StyleSheet, View, Text, SafeAreaView,FlatList, TextInput, ScrollView, TouchableOpacity, Flatlist } from "react-native";
import React from "react";
import Header from "../Components/Header";

const Home = () =>{
    const dispositivos=[
        {
            id:'001',
            nome:'TV',
            conectividade:'conectado'
        },
        {
            id:'002',
            nome:'Caixinha JBL',
            conectividade:'desconectado'
        }

    ]
    const  Item = ({nome},{conectividade}) =>(
        <View style={styles.DeviceBubble}>
            <Text>{nome}</Text>
            <Text>{conectividade}</Text>
        </View>
    )


    return(
        
        <SafeAreaView style={styles.Container} >
            
            <View >
            <Text style={styles.Title}>Dispositivos</Text>
            </View>
            <ScrollView >
                <FlatList
                    data={dispositivos}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><Item nome={item.nome}/>   }
                />
            </ScrollView>
            
        </SafeAreaView>
    )
}


const styles=StyleSheet.create({

    Container: {
        backgroundColor: '#006494',
        height:'100%',
        width:'100%',
       
        
       
    },
    Title:{
        fontSize:32,
        fontWeight:'bold',
        color:'white'
    },
    DeviceBubble:{
        backgroundColor:'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width:230,
        borderRadius:10

    }
        
});

export default Home;