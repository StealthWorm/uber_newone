import React from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';
import { useSelector } from 'react-redux';

import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';

export interface CarCardProps {
  id: string;
  title: string;
  multiplier: number;
  image: string;
}

interface Props extends TouchableOpacityProps {
  data: CarCardProps;
  selected?: CarCardProps;
}

const SURGE_CHARGE_RATE = 1.5;

export function CarCard({ data, selected, ...rest }: Props) {
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <TouchableOpacity
      style={tw`flex-row justify-between items-center px-5 ${data.id === selected?.id ? "bg-gray-200" : ""}`}
      {...rest}
    >
      <Image
        style={{
          width: 70,
          height: 70,
          resizeMode: "contain"
        }}
        source={{ uri: data.image }}
      />
      <View style={tw`-ml-2`}>
        <Text style={tw`text-xl font-semibold`}>{data.title}</Text>
        <Text style={tw`text-xs text-gray-500`}>{travelTimeInformation?.duration?.text} Travel Time</Text>
      </View>
      <Text style={tw`text-lg font-semibold`}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * data.multiplier) / 100)
        }
      </Text>
    </TouchableOpacity>
  );
}