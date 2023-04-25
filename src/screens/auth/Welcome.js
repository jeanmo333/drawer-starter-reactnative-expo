/** @format */

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className='flex-1'
      style={{ backgroundColor: themeColors.bg }}>
      <View className='flex-1  justify-around mt-5 mb-20 '>
        <Text className='text-gray-300 font-bold text-5xl text-center'>
          Bienvenido
        </Text>

        <Text className='text-gray-200 font-bold text-3xl text-center'>
          restorante app
        </Text>
        <View className='flex-row justify-center'>
          <Image
            className='rounded-full'
            source={require("../../../assets/icons/home.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View className='space-y-4'>
          <TouchableOpacity
            onPress={() => navigation.navigate("register")}
            className='py-3 bg-yellow-400 mx-7 rounded-xl mb-10'>
            <Text className='text-xl font-bold text-center text-yellow-50'>
              Registrarte
            </Text>
          </TouchableOpacity>
          <View className='flex-row justify-center'>
            <Text className='text-white font-bold'>¿Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text className='font-bold text-yellow-400'> Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
