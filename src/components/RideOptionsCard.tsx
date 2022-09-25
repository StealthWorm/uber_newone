import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import { CarCard, CarCardProps } from './CarCard'

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<CarCardProps>();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`flex-row justify-between items-center px-3 -top-2`}>
        <Text style={tw`text-center text-xl w-full mx-3 absolute`}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
        <TouchableOpacity
          style={tw`rounded-full p-3`}
          onPress={() => navigation.navigate("navCard")}
        >
          <Icon name="chevron-left" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarCard
            onPress={() => setSelected(item)}
            data={item}
            selected={selected}
          />
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected ? "bg-gray-300" : ""}`}>
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})