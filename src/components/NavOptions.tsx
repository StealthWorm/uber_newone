import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Card, CardProps } from './Card';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "mapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "eatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  const [dataFlow, setDataFlow] = useState<CardProps[]>([]);

  function handleOpenCard({ screen }: CardProps) {
    navigation.navigate(screen);
  }

  useEffect(() => {
    setDataFlow(data)
  }, [])

  return (
    <FlatList
      data={dataFlow}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          onPress={() => handleOpenCard(item)}
          data={item}
        />
      )}
    />
  )
}

export default NavOptions;