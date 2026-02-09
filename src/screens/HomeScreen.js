import React from 'react';
import { Image,View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IMG } from '../utils'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../utils';
// use navigation

export default function HomeScreen() {
  const navigate = useNavigation()
  return (
    <View >
      {/* <Image source={IMG.LOGO} style={{ width: 100, height: 100 }} />*/}
      <Text style={{ color: 'black' }}> ⚠️⚠️⚠️⚠️TestingERRRRRR </Text>
      
      <TouchableOpacity style={{ padding: 20, backgroundColor: 'yellow', color: 'white' }}
        onPress={()=>navigate.navigate(ROUTES.PROFILE)}
      >
        <Text> GO TO PROFILE </Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

