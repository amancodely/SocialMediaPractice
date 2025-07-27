import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const ScrollExampleAdvanced = () => {
  const scrollViewRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   // Set initial position after component mounts
  //   setTimeout(() => {
  //     scrollViewRef.current?.scrollTo({
  //       y: screenHeight,
  //       animated: false,
  //     });
  //   }, 100);
  // }, []);

  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    setScrollY(currentScrollY);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={true}
      >
        {/* Content above initial view */}
        <View style={[styles.section, { height: screenHeight }]}>
          <Text style={styles.text}>hello2</Text>
          <Text style={styles.subText}>
            (Scroll up to see this!)
          </Text>
        </View>
        
        {/* Initial view */}
        <View style={[styles.section, { height: screenHeight }]}>
          <Text style={styles.text}>hello</Text>
          <Text style={styles.subText}>
            (Initial text in middle)
          </Text>
        </View>
        
        {/* Additional content below */}
        <View style={[styles.section, { height: screenHeight }]}>
          <Text style={styles.text}>More content...</Text>
          <Text style={styles.subText}>
            (Scroll down to see this!)
          </Text>
        </View>
      </ScrollView>
      
      {/* Debug info */}
      <View style={styles.debugInfo}>
        <Text style={styles.debugText}>
          Scroll Y: {Math.round(scrollY)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  section: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  debugInfo: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  debugText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ScrollExampleAdvanced;
