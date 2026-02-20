import React, { useState } from 'react';
import { Text, View,Button } from 'react-native';
import CustomeTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import CustomButton from '../../components/CustomButton'

export default function Register() {
  console.log('this is register')

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: '100%',
      }}
    >
     <Text>Register </Text>
    </View>
  );
}
