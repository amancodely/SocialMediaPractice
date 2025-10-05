import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput ,Button,FlatList,TouchableOpacity} from 'react-native';

const App = () => {
  const [inText, setInText]= useState('');
  const [list, setList]= useState([])

  const showAlert = () => {
    alert(inText); 
    console.log("eror"+inText);
    setList([...list,{id:Math.random(), value:inText,edit:false}]);
    console.log("list ryt now"+JSON.stringify(list));

  
  }


  const deleteTodo=(id)=>{
    // const newList = list.filter((item)=> item.id !== id);
    // setList(newList);

    const newList= list.filter((item)=>item.id!==id);
    setList(newList)
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello, React Native!</Text> */}
      <TextInput placeholder='enter your name'
      onChangeText={setInText}
      value={inText}
      ></TextInput>
      <Button title="Submit" onPress={showAlert} />
      {/* {list.map((item)=><Text key={item.id}>{item.value}</Text>)} */}
      <FlatList
        data={list} // array of items
        keyExtractor={(item) => item.id} // unique key
        renderItem={({ item }) => ( // 3️⃣ how each row looks
          <View style ={{flexDirection:'row'}}> 
            <Text style={styles.text}>{item.value}</Text>       
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={{marginLeft:20}}>Delete</Text>
            </TouchableOpacity>
      
          </View>

        )}></FlatList>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full screen
    marginTop:20,
    justifyContent: 'flex-start', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f5f5f5', // Light background color
  },
  text: {
    fontSize: 20,
    color: '#333', // Dark text color
  },
});

export default App;