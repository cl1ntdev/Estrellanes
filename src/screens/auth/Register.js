import React, { useState } from 'react';
import {Alert, Text, View,Button, TouchableOpacity } from 'react-native';
import CustomeTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import CustomButton from '../../components/CustomButton'

export default function Register() {
  console.log('this is register')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: '100%',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '20%',
          // borderWidth: 1,
          width: '100%',
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <CustomeTextInput
          label={'Enter Username'}
          placeholder={'Enter your username'}
          onChangeText={setUsername}
          labelStyle={{ color: 'black' }}
          TextInputStyle={{
            borderBottomWidth: 1,
            color: 'black',
            // borderWidth: 1,
            // borderColor: 'gray',
          }}
          containerStyle={{
            width: '100%',
          }}
        />

        <CustomeTextInput
          label={'Enter Password'}
          placeholder={'Enter your Password'}
          onChangeText={setPassword}
          labelStyle={{ color: 'black' }}
          TextInputStyle={{
            borderBottomWidth: 1,
            color: 'black',
            // borderWidth: 1,
            // borderColor: 'gray',
          }}
          containerStyle={{
            width: '100%',
          }}
        />
        <CustomeTextInput
          label={'Confirm Password'}
          placeholder={'Re-enter your Password'}
          onChangeText={setConfPass}
          labelStyle={{ color: 'black' }}
          TextInputStyle={{
            borderBottomWidth: 1,
            color: 'black',
            // borderWidth: 1,
            // borderColor: 'gray',
          }}
          containerStyle={{
            width: '100%',
          }}
        />
      </View>
      

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <CustomButton
          label={'Register'}
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0377FF',
            padding: 10,
            borderRadius: 20,
          }}
          textStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
          onPress={() => {
            Alert.alert('Credentials', `u: ${username} p: ${password} `);
          }}
        />
      </View>

      
    </View>
  );
}
