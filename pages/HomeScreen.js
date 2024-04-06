import { ImageBackground, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BarStatus from '../components/BarStatus';
import ContentHome from '../components/ContentHome';
import Title from '../components/Title';

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
      <View style={{ flex: 1.5 }}>
        <ImageBackground
          resizeMode='cover'
          style={styles.image}
          source={require('../assets/images/image4.png')}>
          <Title title={'Dublín'}></Title>
        </ImageBackground>
      </View>
      <View style={{ flex: 4.5, marginTop: -60 }}>
        <ContentHome navigation={navigation} />
      </View>
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
    flex: 1,
    justifyContent: 'center',
  }
});
