import React from 'react'
import { View, Text, ScrollView , FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const Head = () =>{
      return ( 
        <View>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        <Text>asek</Text>
        </View>
      )
  }

  const Footer = () => {
    const navigation = useNavigation();
    return ( 
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Auth')}>
                <Text>Dandi</Text>
            </TouchableOpacity>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Keluar</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        <Text>Dandi</Text>
        </View>
      )
  }
  
export default function Percobaan() {
    const renderItem = ({ item }) => {
        return (
        <View >
        <Text >{item.title}</Text>
        </View>
      )}
    return (
            <FlatList data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Head />}
        horizontal={true}
        ListFooterComponent={<Footer />}
         />
    )
}
