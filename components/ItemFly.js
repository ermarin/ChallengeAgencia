import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

export default ItemFly = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.adjust_txt}>
        <Text style={styles.text}>{item.from}</Text>
        <Text style={styles.text}>{item.to}</Text>
      </View>
      <View style={styles.adjust_txt}>
        <Text style={styles.txt_fly}>MEX</Text>
        <View style={styles.line}></View>
        <FontAwesome5 name='plane' size={38} color='#4563FF' />
        <View style={styles.line}></View>
        <Text style={styles.txt_fly}>DUB</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
  },
  adjust_txt: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#4563FF',
    fontSize: 12,
    fontWeight: '600',
  },
  line: {
    flex: 0.4,
    borderColor: '#4563FF',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  txt_fly: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '600',
  }
});