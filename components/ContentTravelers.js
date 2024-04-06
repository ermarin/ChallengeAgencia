import { StyleSheet, View } from 'react-native';

import ButtonBack from './ButtonBack';
import SliderTravelers from './SliderTravelers';

export default function ContentTravelers({ navigation }) {
  return (
    <View style={styles.container}>
      <ButtonBack navigation={navigation} />
      <SliderTravelers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
