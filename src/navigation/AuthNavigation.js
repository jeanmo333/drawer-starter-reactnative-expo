/** @format */

import React from "react";
import { Switch, TouchableRipple, Text, IconButton } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import usePreferences from "../hooks/usePreferences";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function AuthNavigation(props) {
  const { navigation } = props;
  const { theme, toggleTheme } = usePreferences();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='login'
        component={Login}
        options={{
          title: "Iniciar secion",
        }}
      />
    </Stack.Navigator>
  );
}
