import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator , TransitionPresets, CardStyleInterpolators} from '@react-navigation/stack';
import { Auth } from './Auth/auth';
import { AuthMain } from './pages/index';
import Percobaan from './coba';
const RootStack = createDrawerNavigator();
export default function () {
    return (
      <NavigationContainer>
        <RootStack.Navigator 
        screenOptions={{
          headerShown: false,
          gestureDirection:'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          swipeEnabled:false
        }}
        >
          <RootStack.Screen name={'Auth'} component={Auth} />
          <RootStack.Screen name={'Main'} component={AuthMain} />
          <RootStack.Screen name={'Coba'} component={Percobaan} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };