import { StyleSheet, Text } from 'react-native';

export default function Title({title}) {
  return (
    <Text style={styles.text}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 60,
    textAlign: 'center',
    marginVertical: 20,
  }
});
