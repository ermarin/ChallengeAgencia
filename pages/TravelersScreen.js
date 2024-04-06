import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BarStatus from '../components/BarStatus';
import ContentTravelers from '../components/ContentTravelers';

export default function TravelersScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[
      styles.container,
      {
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
      ]}
    >
      <BarStatus />
      <ContentTravelers navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F7F7F7'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 200,
  }
});
