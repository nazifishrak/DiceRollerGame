import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import d1 from './assets/dice1.png';
import d2 from './assets/dice2.png';
import d3 from './assets/dice3.png';
import d4 from './assets/dice4.png';
import d5 from './assets/dice5.png';
import d6 from './assets/dice6.png';

let App = () => {
  const [uri, setUri] = useState(
    d6,
  ); /* Why doesn't my code work when I put this state thing inside the 
  function roll?  At this stage the app works perfectly. Can you clarify where I can use this state */

  const [col, setCol] = useState(`rgb(${1},${2},${3},)`);
  const roll = () => {
    let arr = [d1, d2, d3, d4, d5, d6];
    function getRandomIntBetween(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let w = getRandomIntBetween(0, 5);
    setUri(arr[w]);
  };

  const bgchng = () => {
    setCol(
      `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256,
      )},${Math.floor(Math.random() * 256)})`,
    );
  };

  return (
    <>
      <StatusBar backgroundColor={col} />
      <View style={[styles.x, {backgroundColor: col}]}>
        <TouchableOpacity onPress={roll}>
          <Image style={styles.img} source={uri} />
        </TouchableOpacity>
        <TouchableOpacity onPress={roll}>
          <Text style={styles.y}>Roll </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={bgchng}>
          <Text style={[styles.y, styles.bt2]}>Color Change</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

let styles = StyleSheet.create({
  x: {
    flex: 1 /* Covers the whole screen*/,
    alignItems: 'center' /* Horizontally Centers*/,
    justifyContent: 'center' /* Vertically Centers*/,
  },
  y: {
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 34,
    backgroundColor: '#71a2b0',
    textAlign: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 15,
    marginTop: 100,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  img: {
    height: 200,
    width: 200,
  },
  bt2: {
    marginTop: 30,
    backgroundColor: '#03fc88',
    color: 'white',
  },
});

export default App;
