import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BarStatus from './BarStatus';
import ContentHome from './ContentHome';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[
      styles.container,
      {
        paddingTop: insets.top,
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
          <ContentHome />
      </ImageBackground>
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
