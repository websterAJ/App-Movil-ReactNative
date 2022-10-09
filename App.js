import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeScreen} from "./src/components/HomeScreen.js";
import {ProfileScreen} from "./src/components/ProfileScreen.js";
import {MenuScreen} from "./src/components/MenuScreen.js";




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
