import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import database from "../../config/firebaseconfig"
import styles from "./style"
import { Ionicons } from "@expo/vector-icons"



export default function NewTask({ navigation }, props){

    const [description, setDescription] = useState(null);
 
    function addTask(){
      database.collection('Tasks').add({
        description: description,
        status: false
      })
      navigation.navigate("Task");
    }

    return(
        <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
      style={styles.inputText}
      placeholder="Ex: estudar javascript"
      onChangeText={setDescription}
      value={description}
      />
      <TouchableOpacity 
        style={styles.bgButton}
        onPress={()=>{
          addTask()
        }}
      >
        <Text style={styles.iconButton}>
            <Ionicons name="save" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
    )
}