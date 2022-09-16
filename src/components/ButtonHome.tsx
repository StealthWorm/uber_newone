import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon'; //@expo/vector-icons/FontAwesome
import tw from 'tailwind-react-native-classnames';

export function ButtonHome() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("homeScreen")} style={tw`absolute top-10 left-6 w-10 p-3 z-50 rounded-full bg-gray-100 shadow-lg`}>
      <Icon name="menu" size={16} />
    </TouchableOpacity>
  );
}