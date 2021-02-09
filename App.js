import * as React from 'react';
import {TouchableHighlight, Image} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from './src/config/colors';
import store from './src/store/index';

import Home from './src/pages/home';
import Profile from './src/pages/profile';
import Detail from './src/pages/detail';
import PlaylistCatlist from './src/pages/playlist';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const TabBarScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{}} />
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
              headerTitle: '推荐',
              headerStyle: {
                backgroundColor: colors.themeColor,
              },
              headerTintColor: colors.fontColorLight,
            }}
          />
          <HomeStack.Screen
            name="Detail"
            component={Detail}
            options={({navigation, route}) => ({
              headerTitle: '详情',
              headerLeft: () => {
                return (
                  <TouchableHighlight onPress={() => navigation.pop()}>
                    <Image
                      style={{left: 15, width: 20, height: 20}}
                      source={require('./src/images/direction-left.png')}
                    />
                  </TouchableHighlight>
                );
              },
            })}
          />
          <HomeStack.Screen
            name="PlaylistCatlist"
            component={PlaylistCatlist}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
