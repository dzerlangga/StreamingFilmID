import * as React from 'react';
import { createStackNavigator,TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
const Dashboard = React.lazy(async () => import('./Dashboard/index'));
const Detail = React.lazy(async () => import('./video/index'));
const Show = React.lazy(async () => import('./video/preview/index'));
const HomeStack = createStackNavigator();
export function AuthMain() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
            gestureDirection:'horizontal',
            ...TransitionPresets.SlideFromRightIOS, /// bisa gini atau
            // cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS, //gini
        }}>
          <HomeStack.Screen name={"Dashboard"} component={Dashboard} />
          <HomeStack.Screen name={"Detail"} component={Detail} />
          <HomeStack.Screen name={"ShowVid"} component={Show} />
        </HomeStack.Navigator>
    );
  };
  