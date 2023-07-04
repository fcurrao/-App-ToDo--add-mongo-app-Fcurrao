import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react' 

const RenderItemTask = ({item, onPressTask}) => {

    

    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View  style={styles.task} key={item.id}>
                {(item.completed == true )?
                <>
                <Text style={styles.taskTextDone}>{item.task}</Text>
                </>
                :
                <>
                <Text style={styles.taskText}>{item.task}</Text>
                </>}
            </View>
        </Pressable>
    )
}

export default RenderItemTask
 

const styles = StyleSheet.create({
    
    task: {
        width: 200,
        backgroundColor: 'pink',
        padding: 10,
        margin: 2,
        marginBottom: 15,

    }, 
    taskTextDone :{
        textDecorationLine: 'line-through',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textotachado: {
        textDecorationLine: "line-through",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'gray',
    },
    buttondone: {
        backgroundColor: 'green'
    },
    buttonnotyet: {
        backgroundColor: 'red'
    },
    buttonConteiner: {
        flexDirection: "row",
        alignItems: "center",
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 30,
        marginBottom: 15,
        textAlign: 'center',
    },

})