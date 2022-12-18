import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from "./header"
import * as React from 'react';
import { useState } from 'react';
export default function Random({navigation}) {

  const [ menu, setMenu ] = React.useState(true);
  const [ random, setRandom ] = React.useState(false);
  const [ medium, setMedium ] = React.useState(false);
  const [ hard, setHard ] = React.useState(false);
  const [ pump, setPump ] = React.useState("");
  const [ smg, setSmg ] = React.useState("");
  const [ rifles, setRifles ] = React.useState("");
  const [ snip, setSnip ] = React.useState("");
  const [ autre, setAutre ] = React.useState("");
  const [ city, setCity ] = React.useState("");
  const [ nbrestart, setNbrestart ] = React.useState(3);
  const [ disablerestart, setDisablerestart] = React.useState(false);
  

  const pompes = ["striker", "pompe auto", "double-coup", "pompe à amorces"];
  const pistolet = ["pistolet", "pm stinger", "pm à charge"];
  const assault = ["fusil hammer", "haug", "aka", "fusil d'assault de combat"];
  const spawn = ["logjam lotus", "Tilted towers", "shifty shafts", "coney crossroads", "lazy lagoon", "sleepy sound", "la bamboche", "cascades de réalité", "greasy grove", "rocky reels", "synapse station", "circuit chonkers", "condo canyon", "bourg-jonesy", "suffled shrines", "sanctuaire"];
  const sniper = ["baret", "tireu d'élite"];
  const objets = ["lance-scies", "gants crampneurs", "faille", "tente", "fort de poche", "boogie", "faille a débris", "nuage", "kamehameha", "canne à pêche", "harpon",];


  function getRandom(a){
    const randomElement = a[Math.floor(Math.random() * a.length)];
    return randomElement
  }


  function goEasy(){
    setMenu(false);
    setRandom(true);
    setCity(getRandom(spawn))
  }
  function goMedium(){
    setMenu(false);
    setRandom(true);
    setMedium(true);
    setCity(getRandom(spawn));
    setPump(getRandom(pompes));
    setSmg(getRandom(pistolet));
    setRifles(getRandom(assault));
    setAutre(getRandom(objets));
  }
  function goHard(){
    setMenu(false);
    setRandom(true);
    setHard(true);
    setCity(getRandom(spawn));
    setPump(getRandom(pompes));
    setSmg(getRandom(pistolet));
    setRifles(getRandom(assault));
    setAutre(getRandom(objets));
    setSnip(getRandom(sniper));
  }
  function goChoose(){
    setRandom(false);
    setMenu(true);
    setHard(false);
    setMedium(false);
    setNbrestart(3);
    setDisablerestart(false);
  }
  function restartEasy(){
    setCity(getRandom(spawn))
    if(nbrestart == 1){
      setNbrestart(nbrestart - 1)
      setDisablerestart(true);
    }else{
      setNbrestart(nbrestart - 1)
    }
  }
  function restartMedium(){
    setCity(getRandom(spawn));
    setPump(getRandom(pompes));
    setSmg(getRandom(pistolet));
    setRifles(getRandom(assault));
    setAutre(getRandom(objets));
    setSnip(getRandom(sniper));
    if(nbrestart == 1){
      setNbrestart(nbrestart - 1)
      setDisablerestart(true);
    }else{
      setNbrestart(nbrestart - 1)
    }
  }
  function restartHard(){
    setCity(getRandom(spawn))
    if(nbrestart == 1){
      setNbrestart(nbrestart - 1)
      setDisablerestart(true);
    }else{
      setNbrestart(nbrestart - 1)
    }
  }
  function SnipOrAutre(){
    const nombre = Math.floor(Math.random() * 3)
    if(nombre == 1 || nombre == 2){
      return(
        <Text>{autre}</Text>
      )
    }
    if(nombre == 0){
      return(
        <Text>{snip}</Text>
      )
    }
  }
  function RandomWeapons(){
    const nombre = Math.floor(Math.random() * 3)
    if(nombre == 0){
      return(
        <Text>{getRandom(pompes)}</Text>
      )
    }
    if(nombre == 1){
      return(
        <Text>{getRandom(pistolet)}</Text>
      )
    }
    if(nombre == 2){
      return(
        <Text>{getRandom(assault)}</Text>
      )
    }
  }
  function RandomObject(){
    const nombre = Math.floor(Math.random() * 2)
    if(nombre == 0){
      return(
        <Text>{getRandom(sniper)}</Text>
      )
    }
    if(nombre == 1){
      return(
        <Text>{getRandom(objets)}</Text>
      )
    }
  }
  return (
    <View style={styles.container}>
        <Header/>
        
        {menu &&<View style={styles.containerbtn}>
          <View style={styles.divbtn}>
            <Button title="easy mode" color="tomato"onPress={goEasy}  style={styles.btnmenu}/>
            <Button title="medium mode" color="tomato" onPress={goMedium} style={styles.btnmenu}/>
            <Button title="hard mode" color="tomato" onPress={goHard} style={styles.btnmenu}/>
          </View>
          
        </View>}  
        {random && <ScrollView style={styles.container_scroll}><View style={styles.containerrandomresult}>
          {!medium && !hard && <Text style={styles.titremode}>Easy Mode</Text>}
          {medium && !hard && <Text style={styles.titremode}>Medium Mode</Text>}
          {hard && !medium && <Text style={styles.titremode}>Hard Mode</Text>}
          <Text style={styles.spawn}>Spawn :</Text>
          <Text style={styles.spawnDynamic}>{city}</Text>

          {medium && !hard &&<View>
            <Text style={styles.spawn}>Armes :</Text>
            <Text style={styles.spawnDynamic}>{pump}</Text>
            <Text style={styles.spawnDynamic}>{smg}</Text>
            <Text style={styles.spawnDynamic}>{rifles}</Text>
            <Text style={styles.spawnDynamic}><SnipOrAutre/></Text>
            <Text style={styles.spawnDynamic}>+ 1 slot de ton choix</Text>
          </View>}
          {!medium && hard &&<View>
            <Text style={styles.spawn}>Armes :</Text>
            <Text style={styles.spawnDynamic}><RandomWeapons/></Text>
            <Text style={styles.spawnDynamic}><RandomWeapons/></Text>
            <Text style={styles.spawnDynamic}><RandomWeapons/></Text>
            <Text style={styles.spawnDynamic}><RandomObject/></Text>
            <Text style={styles.spawnDynamic}><RandomObject/></Text>
          </View>}
          
          <View style={styles.btn_restart}>
            
            {!medium && !hard && !disablerestart && <Button title="restart" color="tomato"onPress={restartEasy}  style={styles.btnmenu}/>}
            {medium && !hard && !disablerestart && <Button title="restart" color="tomato"onPress={restartMedium}  style={styles.btnmenu}/>}
            {!medium && hard && !disablerestart && <Button title="restart" color="tomato"onPress={restartHard}  style={styles.btnmenu}/>}
            <Button title="choose mode" color="tomato" onPress={goChoose} style={styles.btnmenu}/>
          </View>
          <Text style={styles.spawn}>{nbrestart} restart left</Text>
        </View></ScrollView>}
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbtn:{
    flex: 1,
    alignItems: "center",
    justifyContent:"center",

    
  },
  divbtn:{
    height:175,
    justifyContent: "space-between",
  },
  btnmenu:{
    borderRadius:15
  },
  containerrandomresult:{
    flex: 1,
    alignItems: "center",
    marginTop:25
  },
  spawn:{
    fontSize:25,
    fontWeight: "bold",
    textAlign:"center",
    marginTop:20
  },
  spawnDynamic:{
    fontSize:25,
    fontWeight: "bold",
    color:"#0099ff"
  },
  btn_restart:{
    width:"100%",
    flexDirection:"row",
    justifyContent: "space-around",
    marginTop: 40
  },
  titremode:{
    fontSize:25,
    fontWeight: "bold",
    textAlign:"center",
    color:"tomato"
  },
  container_scroll:{
    flex:1,
    height:"100%"
  }
});
