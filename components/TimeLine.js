import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TimeLine() {
  return (
    <View style={styles.content}>
      <View style={styles.square}>
        <View style={[styles.pointer, styles.left]}></View>
        <View style={styles.point}>
          <Text style={{ color: '#ffffff' }}>1</Text>
        </View>
        <View style={[styles.pointer, styles.right]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    padding: 10,
  },
  point: {
    backgroundColor: '#4563FF',
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    top: -10,
  },
  pointer: {
    backgroundColor: '#4563FF',
    width: 8,
    height: 8,
    borderRadius: 100,
    borderColor: '#4563FF',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
  },
  square: {
    backgroundColor: '#4563FF',
    width: '100%',
    height: 2,
    borderWidth: 1,
    borderColor: '#4563FF',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0
  },
  left: {
    left: -5,
    top: -4,
  },
  right: {
    right: -5,
    top: -4,
  }
});