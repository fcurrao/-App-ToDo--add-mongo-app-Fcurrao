import { StyleSheet, Text, Pressable, Button, View, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList'
import ModalTask from '../Components/Modal'
const MainScreen = ({ taskList }) => {

    const [list, setList] = useState(taskList)
    const [input, setInput] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [taskActive, setTaskActive] = useState({}) 
    
    const onPressStatus = (status) => {
        const otherTask = list.filter(taskList => taskList.id !== taskActive.id)
        const orderedList= [ ...otherTask, {...taskActive, completed:status}  ].sort( function(a,b){
            if (a.id > b.id){
                return 1;
            }
            if (a.id < b.id){
                return -1;
            }
            return 0
        })
        setList(orderedList)
        setModalVisible(!modalVisible)
        
    } 

    
    const handleAddTask = () => {
        setList([...list,
        {
            id: Date.now(), // list.length +1
            task: input,
            completed: false
        }
        ])
        setInput("")
        // setModalVisible(true)
    }

    const onPressTask = (task) => {
        setTaskActive(task)
       setModalVisible(!modalVisible)
    //    task.item.complete = done
    }
 

    return (
        <View style={styles.container} >
            <Text>MY APLICACION</Text>
            <TopBar handleAddTask={handleAddTask} input={input} setInput={setInput} />
            <ModalTask
                list={list}    
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive} 
                onPressStatus={onPressStatus}
            />
            <TaskList   list={list} onPressTask={onPressTask}></TaskList>
        </View>
    )
}


export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, // todo el alto de pantalla, (100%)
        flexDirection: 'column', // defect column
        justifyContent: 'center',  // centrado
        alignItems: 'center',   // centrado
        backgroundColor: 'lightblue ' // fondo Negro

    },

})
