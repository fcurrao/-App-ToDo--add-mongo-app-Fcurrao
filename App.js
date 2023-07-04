import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import MainScreen from './src/Screens/MainScreen';





const taskList = [
  // {
  //   id: 1,
  //   task: "Regar plantas",
  //   completed: false
  // },
  // {
  //   id: 2,
  //   task: "Lavar platos",
  //   completed: false
  // },{
  //   id: 3,
  //   task: "Limpiar el baño",
  //   completed: true
  // },{
  //   id: 4,
  //   task: "Ir a comprar carne",
  //   completed: false
  // },{
  //   id: 5,
  //   task: "Comprar carbón",
  //   completed: false
  // },
]



export default function App() {
  return (

      <MainScreen taskList={taskList}/>
  );
}
