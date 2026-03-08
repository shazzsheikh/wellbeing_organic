import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import ProductDetail from "../screens/ProductDetail";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* Main App */}
      <Stack.Screen
        name="HomeTabs"
        component={BottomTabs}
      />

      {/* Product Detail Screen */}
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;