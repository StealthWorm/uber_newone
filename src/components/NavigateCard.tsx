import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFasFood from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning !</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to ?"
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            minLength={2}
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            // returnKeyType={"search"}
            onPress={(data, details: any = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description,
              })
              )
              navigation.navigate("rideOptionsCard");
              // console.log(data, details)
            }}
          />
        </View>

        <NavFavourites />
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          onPress={() => navigation.navigate("rideOptionsCard")}
        >
          <Icon name="car" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 rounded-full justify-between`}>
          <IconFasFood name="fast-food-outline" color="black" size={16} />
          <Text style={tw`text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})