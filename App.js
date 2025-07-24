import React from 'react';
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={'Let’s Explore'} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{    flexDirection: 'row', marginLeft:24,justifyContent:'flex-end'}}>
        <View style={{  flexDirection: 'row',flex: 3 }}>
        <Text style={{fontSize:30}}>hello</Text>
        <Text style={{fontSize:30}}> hello2</Text>

        </View>
        
        <View style={{}}>
        <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />

        </View>


      </View>
    </SafeAreaView>
  );
};

export default App;
