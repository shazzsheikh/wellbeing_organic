import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dashboard from '../screens/Dashboard';
import Shop from '../screens/Shop';
import Account from '../screens/Account';
import { Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: hp('7%'),
          paddingBottom: Platform.OS === 'android' ? hp('1%') : hp('2%'),
          paddingTop: Platform.OS === 'android' ? hp('0.5%') : hp('0.3%'),
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Shop') iconName = focused ? 'cart' : 'cart-outline';
          if (route.name === 'Account') iconName = focused ? 'account' : 'account-outline';

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={dashboard} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
