import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {

  return (
    <View>
      <Text>NavFavourites</Text>
    </View>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})