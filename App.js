import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from './src/config/colors';
import store from './src/store/index';

import Home from './src/pages/home';
import Profile from './src/pages/profile';
import Detail from './src/pages/detail';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const TabBarScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="TabBar"
            component={TabBarScreen}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: colors.themeColor,
              },
              headerTintColor: colors.fontColorLight,
            }}
          />
          <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
