import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../utils';
export default function CustomButton({
  containerStyle,
  textStyle,
  label,
  onPress,
}) {
  return (
      <TouchableOpacity
        style={ containerStyle }
        onPress={onPress}>
        <Text style={ textStyle }>{label}</Text>
      </TouchableOpacity>
  );
}
