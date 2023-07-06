import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";


const Header = () =>{

    return(
            <SafeAreaView style={styles.header}>
            <View style={styles.headerElements}> 
            
                    <View style={styles.headerElements }>
                        <TouchableOpacity
                        activeOpacity={0.1}
                        >
                            <Image
                            source={require('../assets/imgs/LIZA(1).png')} style={{width:35, height:35 ,borderRadius: 25,
                             }}/>
                        </TouchableOpacity>
                        <Text style={{color:'white', paddingTop:10,marginLeft:5,fontSize:18}}>Olá, Giussepi Camoli! </Text>
                    </View>
                    <View style={styles.headerElements} >
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/icons/gear.png')} style={{width:30, height:30}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            

            
            

            </SafeAreaView>
            
        
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#006C8B',
        height:60,
        paddingTop:15,
        display:"flex",
        width:"100%"  
        
    },
    headerElements:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:12,
        paddingRight:15
        
    }

});

export default Header;