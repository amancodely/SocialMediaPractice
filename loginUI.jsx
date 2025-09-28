import React,{useState} from 'react';
import { SafeAreaView, View, Text, TextInput,StyleSheet,Button } from 'react-native';

const App = () => {

    const [text, setText] = useState('');

    const handlePress = () => {
        alert(`You entered: ${text}`);

    }

	return (
		<SafeAreaView style={styles.container}>
			
            <TextInput
            style={styles.input}      
                placeholder="Type here..."
                value={text}
                onChangeText={setText}
            />
             <Button title="Press Me" onPress={handlePress} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},
    input: {
        height: 40,
        width:'100%',
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});

export default App;