import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";




const Login = () => {
    const [usuario,setUsuario]= useState('')
    const [senha,setSenha]=useState('')

    function handleSignin(data){
        console.log(data);
    }

    
    return (
        <SafeAreaView style={styles.Container}>
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/imgs/logoComNome.png')}
            style={styles.image}
            />
            <Text style={styles.title}>Entrar</Text>
            
                <View >

                    <Text style={styles.text}>Usuario</Text>
                    <TextInput style={styles.input}
                    value={usuario}
                    onChangeText={setUsuario}
                    placeholder="Digite seu E-mail" />  
                    <Text style={styles.text} >Senha</Text>
                    <TextInput style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Digite sua Senha"
                    secureTextEntry={true} 
                     />  
                    
                    
                </View>
                <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}

                     >
                        <Text style={styles.buttonText}>Login</Text>
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
        width:200,
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

export default Login;