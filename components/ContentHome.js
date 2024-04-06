import { StyleSheet, View } from 'react-native';

import BoxDetails from './BoxDetails';
import BoxFly from './BoxFly';

export default function ContentHome({ navigation }) {
  return (
    <View style={styles.container}>
      <BoxFly navigation={navigation} />
      <BoxDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
