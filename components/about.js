import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import * as React from 'react';
import Header from './header';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function About() {

  function contactinsta(){
    Linking.openURL('instagram://user?username=theo_lebrere')
    .catch(() => {
      Linking.openURL('https://www.instagram.com/theo_lebrere');
    })
  }
  function contactmail(){
    Linking.openURL('mailto:cobaltium360@gmail.com')
  }

  return (
    <View style={styles.container_about}>
      <Header />
      <Text style={styles.title}>à propos</Text>
      <View style={styles.containertext}>
        <Text style={styles.textabout}>Pour toutes questions, améliorations ou idées de projets n'hésitez pas à me contacter, j'aime travailler sur de nouveaux projets.</Text>
      </View>
      <View style={styles.container_contact}>
        <TouchableOpacity style={styles.btn_about} onPress={contactinsta}>
          <Ionicons name="logo-instagram" size={50} style={styles.logoabout}/>
          <Text>theo_lebrere</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_about} onPress={contactmail}>
          <Ionicons name="mail-outline" size={50} style={styles.logoabout}/>
          <Text>cobaltium360@gmail.com</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:35,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:20
  },
  containertext:{
    width: "85%",
    marginTop: 30

  },
  textabout:{
    fontSize:20,

  },
  container_about:{
    flex:1,
    alignItems:"center"
  },
  btn_about:{
    backgroundColor:"white",
    borderRadius:15,
    padding:15
  },
  container_contact:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop: 40
  },
  logoabout:{
    textAlign:"center"
  }

});
