import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from "react-native";
import React from "react";

const TopBar = ({
    input,
    setInput,
    handleAddTask
}) => {
    return (
        <View style={styles.view1}>
            <TextInput
                placeholder="Agregar tarea.."
                style={styles.input}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;

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
    input: {
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8,
        width: 150
    },
    button: {
        backgroundColor: 'orange'
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})