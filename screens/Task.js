import React, { useEffect, useState } from "react"
import { StyleSheet,FlatList,TouchableOpacity,Alert,View,Text } from "react-native"
import database from "../config"

export default function Task ({navigation}){
    const [task, setTask]= useState
    useEffect(()=> {
        database.collection("Tasks").onSnapshot((query)=>{
            const list =[]
            query.forEach((doc)=>{
                list.push({...doc.data(),id:doc.id})
            })
            setTask(list)
        })
    },[])
    
}
return(

<View style={styles.container}> 
  <Text>Lista de Tarefas:</Text>  
  <FlatList/>
  <TouchableOpacity style={styles.ButtonNewTask}>
    <Text style = {styles.iconButton}>+</Text>

  </TouchableOpacity>

</View>


)

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#fff",
    paddingTop: 20,
},
ButtonNewTask:{
    width: 60,
    height:60,
    position: "absolute",
    bottom:30,
    left: 20,
    backgroundColor:"#f92e6a",
    borderRadius:50,
    justifyContent: "center",
    alignItems: "center"
}

})



