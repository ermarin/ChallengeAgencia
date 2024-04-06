import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';

import HomeScreen from './pages/HomeScreen';
import TravelersScreen from './pages/TravelersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          title: 'Agencia de Viaje',
          headerStyle: {
            backgroundColor: '#4563FF',
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}
      >
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            headerRight: () => (
            <Feather name='menu' size={24} color='white' />
          ),
          }}
        />
        <Stack.Screen
          name={'TravelersScreen'}
          component={TravelersScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
