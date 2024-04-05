import { StyleSheet, View } from 'react-native';

import BoxDetails from './BoxDetails';
import BoxFly from './BoxFly';
import Title from './Title';

export default function ContentHome() {
  return (
    <View style={styles.container}>
      <Title title={'Dublín'}></Title>
      <BoxFly />
      <BoxDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
