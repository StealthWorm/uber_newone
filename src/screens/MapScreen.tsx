import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { useNavigation } from '@react-navigation/native';
import { ButtonHome } from '../components/ButtonHome';

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <ButtonHome />

      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        {/* screenOptions={{ headerShown: false }} */}
        <Stack.Navigator>
          <Stack.Screen
            name="navCard"
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="rideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})