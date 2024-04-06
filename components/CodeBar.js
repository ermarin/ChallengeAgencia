import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default CodeBar = ({ item }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name='barcode' size={76} color='black' />
      <Text style={styles.txt_code}>{item.codebar}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  txt_code: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 3
  }
});