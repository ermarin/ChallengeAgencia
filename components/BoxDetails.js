import { StyleSheet, Text, View } from 'react-native';

export default function BoxDetails() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Equipaje incluido</Text>
      </View>
      <View>
        <Text>Equipaje incluido</Text>
      </View>
      <View>
        <Text>Equipaje incluido</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  }
});