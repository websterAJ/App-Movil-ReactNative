import React from 'react'
import {
    Button,
    ToastAndroid
  } from 'react-native';

export function HomeScreen({ navigation }){
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT)
          //navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
};