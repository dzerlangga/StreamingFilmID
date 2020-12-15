import React, {lazy} from 'react';
import { createStackNavigator , TransitionPresets,CardStyleInterpolators} from '@react-navigation/stack';
const Login = lazy(async ()=>import('../login/Login'));
const Register = lazy(async ()=>import('../login/Register'));
const AuthStack = createStackNavigator();

export function Auth() {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown:false,
            gestureDirection:'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS

        }}>
          <AuthStack.Screen name={'Login'} component={Login} />
          <AuthStack.Screen name={'Register'} component={Register} />
        </AuthStack.Navigator>
    );
  };