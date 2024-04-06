import React from 'react';
import { Dimensions, StyleSheet, View, useWindowDimensions } from 'react-native';

import CodeBar from './CodeBar';
import ItemFly from './ItemFly';
import ItemHeader from './ItemHeader';
import ItemInfoTraveler from './ItemInfoTraveler';

export default Items = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={[styles.container, styles.shadowProp]}>
        <ItemHeader item={item} />
        <ItemFly item={item} />
        <ItemInfoTraveler item={item} />
      </View>
      <View style={[styles.cont_code, styles.shadowProp]}>
        <CodeBar item={item} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    zIndex: 1,
    width: Dimensions.get('window').width - 40
  },
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 11,
  },
  cont_code: {
    backgroundColor: '#FFFFFF',
    flex: 0.5,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 10,
    top: -30,
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 40
  },
});