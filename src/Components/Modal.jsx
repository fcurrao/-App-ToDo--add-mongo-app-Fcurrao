import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive, 
    onPressStatus  
}) => {
 
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        {(taskActive.completed)? <>
                            <Pressable
                            style={[styles.button, styles.buttonnotyet]}
                            onPress={ ()=> onPressStatus(false) }
                        >
                            <Text style={styles.textStyle}>NotYet</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>volver</Text>
                        </Pressable> </>
                        : 
                        <> 
                        <Pressable
                            style={[styles.button, styles.buttondone]}
                            onPress={()=> onPressStatus(true) }
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable> 
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>volver</Text>
                        </Pressable> </>}
                        
                       
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;

const styles = StyleSheet.create({
    view1: {
        flex: 1, // (1 parte del total)
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'lightblue',
        width: '100%',
        justifyContent: 'center',  // centrado
        alignItems: 'center',   // centrado
    },
    view2: {
        flex: 2, // (2 parte del total)
        backgroundColor: 'azure',
        width: '100%',
        justifyContent: 'flex-start',  // centrado
        alignItems: 'center',   // centrado
        paddingVertical: 15
    },
    view3: {
        flex: 3, // (3 parte del total)
        backgroundColor: 'gray',
        width: '100%',


    }, 
    input: {
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8,
        width: 150
    },
    task: {
        width: 200,
        backgroundColor: 'pink',
        padding: 10,
        margin: 2,
        marginBottom: 15,

    }, centeredView: {
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