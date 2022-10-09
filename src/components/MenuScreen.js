import React from 'react'
import {
    Button
  } from 'react-native';

export function MenuScreen({ navigation }){
    return (
      <Button
        title="Menu"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
};