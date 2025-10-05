import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.innerbox}>
                <View style={styles.box}>
                    <Text style={{ color: 'white' }}>hello3</Text>

                </View>
                
                
                <View style={styles.box}>
                    <Text style={{ color: 'white' }}>hello2</Text>

                </View>
                <View style={styles.box}>
                    <Text style={{ color: 'white' }}>hello</Text>

                </View >
                <View style={styles.box1}>
                    <Text style={{ color: 'white' }}>hello</Text>

                </View>``
            </View>
            <View style={styles.innerbox}>
                <View style={styles.box}>
                    <Text style={{ color: 'white' }}>hello3</Text>

                </View>
                
                
                <View style={styles.box}>
                    <Text style={{ color: 'white' }}>hello2</Text>

                </View>
                <View style={styles.box}>
                    <Text style={{ color: 'white' }}>hello</Text>

                </View >
                <View style={styles.box1}>
                    <Text style={{ color: 'white' }}>hello</Text>

                </View>``
            </View>
        </View>
    );
}



    const styles = StyleSheet.create({
        container: {
            flex: .5, // Full screen height
            flexDirection:'row',
            justifyContent: 'flex-start', // Center vertically
            alignItems: 'flex-start', // Center horizontally
            backgroundColor: 'green',
            textAlign:""
        },
        innerbox: {
             
            // Takes 25% of the screen
            flexDirection:'column',
            width: '50%', 
            justifyContent: 'center', // Center child boxes vertically
            alignItems: 'flex-end', // Center child boxes horizontally
            backgroundColor: 'yellow',
        },
        box: {
            // flex: 0.25, // Each box takes 25% of the innerbox
            width: 50,
            height: 50,
            backgroundColor: 'blue',
        },
        box1: {
            // flex: , // Takes 25% of the innerbox
            width: 100,
            height: 50,
            backgroundColor: 'red',
            alignItems: 'flex-end',
            justifyContent:'flex-start'
             // Center this box horizontally within the innerbox
        },
    });
