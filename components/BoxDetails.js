import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function BoxDetails() {
  return (
    <View style={styles.container}>
      <View style={[styles.boxs, styles.shadowProp]}>
        <View style={styles.align_icons}>
          <Image source={require('../assets/icons/luggage.png')} style={{ width: 22, height: 17 }} />
        </View>
        <View>
          <Text style={styles.text_title}>Equipaje incluido</Text>
          <Text>1 pieza de 50cm x 30cm x 40cm</Text>
        </View>
      </View>
      <View style={[styles.boxs, styles.shadowProp]}>
        <View style={styles.align_icons}>
          <Image source={require('../assets/icons/seat.png')} style={{ width: 18, height: 23 }} />
        </View>
        <View>
          <Text style={styles.text_title}>Asiento premium</Text>
          <Text>2B - Pasillo</Text>
        </View>
      </View>
      <View style={[styles.boxs, styles.shadowProp]}>
        <View style={styles.align_icons}>
          <Image source={require('../assets/icons/bus.png')} style={{ width: 23, height: 23 }} />
        </View>
        <View>
          <Text style={styles.text_title}>Transporte al aeropuerto</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text>Usa el cupón:&nbsp;</Text>
            <Pressable style={styles.btn_dash}>
              <>
                <Feather name='file' size={10} color='#4563FF' />
                <Text style={styles.text_btn_cupon}>ANU38SP</Text>
              </>
            </Pressable>
            <Text>&nbsp;en Uber</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 60,
  },
  boxs: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    width: '100%',
  },
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 11,
  },
  text_title: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
  },
  align_icons: {
    justifyContent: 'center',
    marginRight: 20,
  },
  text_btn_cupon: {
    color: '#4563FF',
    fontSize: 9,
    fontWeight: '700',
    lineHeight: 20
  },
  btn_dash: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#4563FF',
    borderRadius: 4,
  },
});