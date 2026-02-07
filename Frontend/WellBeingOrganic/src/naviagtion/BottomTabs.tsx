import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dashboard from '../screens/Dashboard';
import Shop from '../screens/Shop';
import AISkin from '../screens/AiSkin';
import Account from '../screens/Account';

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
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          if (route.name === 'Shop') iconName = focused ? 'cart' : 'cart-outline';
          if (route.name === 'AI Skin') iconName = focused ? 'star' : 'star-outline';
          if (route.name === 'Account') iconName = focused ? 'account' : 'account-outline';

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={dashboard} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="AI Skin" component={AISkin} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
