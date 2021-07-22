import { forEach } from "lodash"
import React, { useState, useEffect } from "react"
import { 
    View, 
    Text, 
    TouchableOpacity,
    FlatList,
    Alert
} from "react-native"

import database from "../../config/firebaseconfig"
import styles from  "./style"
import { Ionicons } from "@expo/vector-icons"

export default function Task({ navigation }){



    const [task, setTask] = useState([])

    function deleteTask(id){ //Deleta os itens do BD (dãããã)
        database.collection('Tasks').doc(id).delete()
    }
    
    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
          const list = [];
          query.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          setTask(list);
        });
      }, []);

    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( {item} ) => {
                    return(
                        <View style={styles.Tasks}>
                            

                            <Text
                                style={styles.descriptionTask}
                                onPress={() => {
                                    navigation.navigate("Details",{
                                        id: item.id,
                                        description: item.description
                                    })
                                }}
                            >
                            {item.description}
                            </Text>

                            <TouchableOpacity //botão 1
                                style={styles.deleteTasks}
                                onPress={() => {
                                    return Alert.alert(
                                        "Are your sure?",
                                        "Are you sure you want to remove this task?",
                                        [
                                          // The "Yes" button
                                          {
                                            text: "Yes",
                                            onPress: () => {
                                              deleteTask(item.id);
                                            },
                                          },
                                          // The "No" button
                                          // Does nothing but dismiss the dialog when tapped
                                          {
                                            text: "No",
                                          },
                                        ]
                                      )}}
                            >
                                <Ionicons name="trash" size={24} color="red" />
                            </TouchableOpacity>

                        </View>
                    )
                }}
            />


            <TouchableOpacity 
            style={styles.bgButton}
            onPress={() => navigation.navigate('NewTask')}
            >
                <Text style={styles.iconButton}>
                    <Ionicons name="add" size={24} color="white" />
                </Text>
            </TouchableOpacity>
            
            
        </View>
    )
}