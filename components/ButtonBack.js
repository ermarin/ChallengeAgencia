import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function ButtonBack({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn_back} onPress={() => navigation.goBack()}>
        <View style={styles.cont_btn}>
          <AntDesign name='arrowleft' size={13} color='#4563FF' />
          <Text style={styles.txt_btn}>Atrás</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  cont_btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_back: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, .1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  txt_btn: {
    color: '#4563FF',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
  },
});
