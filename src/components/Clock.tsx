import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Clock: React.FC = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = time;
  const clockSize = 300;
  let test: number = 90;
  const styles = StyleSheet.create({
    container: {
      minWidth: '100%',
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    clock: {
      minWidth: clockSize,
      minHeight: clockSize,
      borderRadius: clockSize/2 ,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      borderWidth: 15,
      borderColor: '#333',
      borderStyle: 'solid'

    },

    number: {
      fontSize: 12, 
      fontWeight: 600,
      position: 'absolute',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      padding: 5,
      flex: 1,
    },
    number1: {
      transform: `rotate(30deg)`,
    },
    number2: {
        transform: `rotate(60deg)`
    },
    number3: {
        transform: `rotate(90deg)`
    },
    number4: {
        transform: `rotate(120deg)`
    },
    number5: {
        transform: `rotate(150deg)`
    },
    number6: {
        transform: `rotate(180deg)`
    },
    number7: {
        transform: `rotate(210deg)`
    },
    number8: {
        transform: `rotate(240deg)`
    },
    number9: {
        transform: `rotate(270deg)`
    },
    number10: {
        transform: `rotate(300deg)`
    },
    number11: {
        transform: `rotate(330deg)`
    },
    number12: {
        transform: `rotate(360deg)`
    },
    center: {
      width: clockSize/15,
      height: clockSize/15,
      borderRadius:clockSize/15,
      backgroundColor:'#a52a2a',
      position:'absolute',
      top: `${clockSize/6}%`,
      left: `${clockSize/6}%`,
      transformOrigin: `${clockSize/6}% ${clockSize/3}%`,
      transform: `translate(${-(clockSize * 1.4555)}px, -20px)`,
      zIndex: 2
    },
    secondHand: {
      width: 2,
      height: 120,
      backgroundColor: '#a52a2a',
      borderRadius: clockSize/(clockSize/10),
      transformOrigin: `${clockSize/6}% ${clockSize/3}%`,
      transform: `translate(${-(clockSize *1.4455)}px, -125px) rotate(${seconds * 6 + 6}deg)`,
      position:'absolute',
      top: `${clockSize/6}%`,
      left: `${clockSize/6}%`,
      zIndex: 1
    },
    minuteHand: {
      width:3,
      height: 110,
      backgroundColor: '#333',
      borderRadius: clockSize/(clockSize/10),
      transform: `translate(${-(clockSize *1.4455)}px, -115px) rotate(${minutes * 6}deg)`,
      position:'absolute',
      transformOrigin: `${clockSize/6}% ${clockSize/3}%`,
      top: `${clockSize/6}%`,
      left: `${clockSize/6}%`,
      zIndex: 1
    },
    hourHand: {
      width: 11,
      height: 75,
      backgroundColor: '#333',
      borderRadius: clockSize/(clockSize/10),
      transformOrigin: `${clockSize/6}% ${clockSize/3}%`,
      transform: `translate(${-(clockSize *1.4455)}px, -82.5px) rotate(${hours * 30 - 90}deg)`,
      position:'absolute',
      top: `${clockSize/6}%`,
      left: `${clockSize/6}%`,
      zIndex: 1
    },
    
  });

  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <View style={styles.number}>
          <Text style={[styles.number, styles.number1]}>1</Text>
          <Text style={[styles.number, styles.number2]}>2</Text>
          <Text style={[styles.number, styles.number3]}>3</Text>
          <Text style={[styles.number, styles.number4]}>4</Text>
          <Text style={[styles.number, styles.number5]}>5</Text>
          <Text style={[styles.number, styles.number6]}>6</Text>
          <Text style={[styles.number, styles.number7]}>7</Text>
          <Text style={[styles.number, styles.number8]}>8</Text>
          <Text style={[styles.number, styles.number9]}>9</Text>
          <Text style={[styles.number, styles.number10]}>10</Text>
          <Text style={[styles.number, styles.number11]}>11</Text>
          <Text style={[styles.number, styles.number12]}>12</Text>
        </View>

        <View style={[styles.center]} />

          <View style={[ styles.secondHand]} />
          <View style={[ styles.minuteHand]} />
          <View style={[ styles.hourHand]} />
      </View>
    </View>
   
  );
};

export default Clock;
