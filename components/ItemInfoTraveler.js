import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ItemInfoTraveler = ({ item }) => {
  return (
    <View style={styles.container}>
      <>
        <View style={styles.adjust_txt}>
          <Text style={styles.txt_title}>Abordaje</Text>
          <Text style={styles.txt_title}>Salida</Text>
          <Text style={styles.txt_title}>Aterrizaje</Text>
        </View>
      </>
      <>
        <View style={styles.adjust_txt}>
          <Text style={styles.txt_info}>{item.approach}</Text>
          <Text style={styles.txt_info}>{item.exit}</Text>
          <Text style={styles.txt_info}>{item.landing}</Text>
        </View>
      </>
      <View style={styles.line}></View>
      <>
        <View style={styles.adjust_txt}>
          <Text style={styles.txt_title}>Pasajero</Text>
          <Text style={styles.txt_title}>Asiento</Text>
        </View>
      </>
      <>
        <View style={styles.adjust_txt}>
          <Text style={styles.txt_info}>{item.passenger}</Text>
          <Text style={styles.txt_info}>{item.seat}</Text>
        </View>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
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
  txt_title: {
    color: '#787878',
    fontSize: 10,
    fontWeight: '500',
  },
  txt_info: {
    color: '#4563FF',
    fontSize: 16,
    fontWeight: '700',
  },
  line: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 20,
  },
});