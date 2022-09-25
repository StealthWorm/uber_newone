import React from 'react'
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Icon from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export interface CardProps {
  id: string;
  title: string;
  image: string;
  screen: string;
}

interface Props extends TouchableOpacityProps {
  data: CardProps;
}

export function Card({ data, ...rest }: Props) {
  const origin = useSelector(selectOrigin);

  return (
    <TouchableOpacity
      style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
      disabled={!origin}
      {...rest}
    >
      <View style={tw`${!origin ? "opacity-20" : ""}`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: "contain" }}
          source={{ uri: data.image }}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>
          {data.title}
        </Text>
        <Icon
          name="arrow-forward"
          color="white"
          size={32}
          style={tw`p-1 bg-black rounded-full w-10 mt-4`}
        />
      </View>
    </TouchableOpacity>
  );
}