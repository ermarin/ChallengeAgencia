import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BarStatus from '../components/BarStatus';
import ContentHome from '../components/ContentHome';

export default function HomeScreen({ navigation }) {
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
      <ImageBackground
        resizeMode='cover'
        style={styles.image}
        source={require('../assets/images/image4.png')}>
        <ContentHome navigation={navigation} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7'
  },
  image: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: 0,
  }
});
