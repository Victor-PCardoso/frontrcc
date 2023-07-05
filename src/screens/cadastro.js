import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";



const Cadastro = () => {

    
    return (
        <SafeAreaView style={styles.Container}>
            <View style={{alignItems:"center"}}>
                <Image source={require('../assets/imgs/logoComNome.png')}
                style={styles.image}
                />
                <Text style={styles.title}>Cadastro</Text>
            </View>
                    <View >
                        <Text style={styles.text }>Usario</Text>
                        <TextInput style={styles.input}
                        placeholder="Digite seu Nome de Usuario"
                         />
                        
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput style={styles.input} 
                        placeholder="Digite seu E-mail"/>
                        <Text style={styles.text}>Re-digite E-mail</Text>
                        <TextInput style={styles.input} 
                        placeholder="Re-digite seu E-mail"
                        />
                        <Text style={styles.text}>Senha</Text>
                        <TextInput style={styles.input} 
                        placeholder="Digite sua Senha"
                        secureTextEntry={true}/>
                        <Text style={styles.text}>Re-digite Senha</Text>
                        <TextInput style={styles.input} 
                        placeholder="Re-digite sua Senha"
                        secureTextEntry={true}/>
                
                    
                    </View>
            
                    <View>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => {
                        Submit
                        }}
                     >
                        <Text style={styles.buttonText}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
                
           
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({

    Container: {
        backgroundColor: '#006494',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text:{
    
        fontSize:15,
        color:'#FFFFFF'
    },
    title:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:21,
        alignContent:"center",
        marginBottom:30
        
    },
    input:{
        backgroundColor:'#D9D9D9',
        minWidth:230,
        maxWidth:230,
        borderRadius: 5,
        height:30,
        marginTop:5,
        marginBottom:5,
        paddingLeft:8

    },
    button:{
        minWidth:80,
        height:35,
        backgroundColor:'#27B005',
        borderRadius:8,
        border:'none',
        marginTop:18
    },
    buttonText:{
        fontSize:15,
        color:'#FFFFFF',
        textAlign:"center",
        paddingTop:6
    },
    image:{
        width:200,
        height:200
    }



})

export default Cadastro;