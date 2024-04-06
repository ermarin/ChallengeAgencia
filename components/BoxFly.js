import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import TimeLine from './TimeLine';

export default function BoxFly({ navigation }) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={{ justifyContent: 'center', marginBottom: 10 }}>
        <Text style={styles.title}>
          Tu vuelo de mañana&nbsp;&nbsp;
          <AntDesign name='questioncircle' size={15} color='#cccccc' />
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <View>
            <Text style={styles.text_hours}>06:25</Text>
            <Text style={styles.text_dest}>MEX</Text>
          </View>
        </View>
        <View style={{ flex: 4, marginHorizontal: 1 }}>
          <TimeLine />
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.text_hours}>23:00</Text>
            <Text style={styles.text_dest}>DUB</Text>
          </View>
        </View>
      </View>
      <View
        style={{ height: 2, marginVertical: 20, backgroundColor: '#E5E5E5'}}
      ></View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Pressable disabled={true} style={styles.btn_disabled}>
          <Text style={styles.btns}>CAMBIAR VUELO</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TravelersScreen')}
          style={styles.btn}
        >
          <Text style={styles.btns}>PASE DE ABORDAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    marginHorizontal: 60,
    width: Dimensions.get('screen').width - 60,
  },
  shadowProp: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 11,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
  btns: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: '#4563FF',
    borderRadius: 4,
  },
  btn_disabled: {
    backgroundColor: '#D6D6D6',
    borderRadius: 4,
  },
  text_hours : {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
  },
  text_dest: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 18,
  },
});