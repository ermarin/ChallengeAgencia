import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default ItemHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/icons/logoTicket.png')} />
      </View>
      <View style={{ flex: 3 }}>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <Text style={styles.text}>Vuelo</Text>
          <Text style={styles.info}>{item.fly}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Sala</Text>
        <Text style={styles.info}>{item.room}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: '#787878',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'right'
  },
  info: {
    color: '#4563FF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right'
  },
});