/** @format */

import React from "react";
import { Text } from "react-native-paper";
import { TouchableOpacity, TextInput, Image, View } from "react-native";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      className='rounded-b-full h-72'
      style={{ backgroundColor: themeColors.bg }}>
      <View className='bg-white px-5 mx-4 pt-5  mb-8 rounded-3xl mt-5'>
        <Text
          style={{ color: themeColors.bg }}
          className='font-bold text-2xl text-center mb-4'>
          Iniciar Sesión
        </Text>
        <Text className='text-gray-700 ml-4 mb-1 font-bold'>
          Correo Electronico
        </Text>
        <TextInput
          className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
          placeholder='Email de Registro'
          value=''
        />

        <Text className='text-gray-700 ml-4 mb-1 font-bold'>Contraseña</Text>

        <TextInput
          className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
          secureTextEntry
          placeholder='Tu contraseña'
          value=''
        />

        <TouchableOpacity className='flex items-end'>
          <Text className='text-gray-700 mb-8 mt-4 font-bold'>
            Olvide mi contraseña
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='py-3 bg-yellow-400 rounded-xl'>
          <Text className='text-xl font-bold text-center text-white'>
            Ingresar
          </Text>
        </TouchableOpacity>

        <View className='flex-row justify-center space-x-12 mt-16 mb-3'>
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              source={require("../../../assets/icons/google.png")}
              className='w-8 h-8'
            />
          </TouchableOpacity>
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              source={require("../../../assets/icons/apple.png")}
              className='w-8 h-8'
            />
          </TouchableOpacity>
          <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
            <Image
              source={require("../../../assets/icons/facebook.png")}
              className='w-8 h-8'
            />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-7'>
          <Text className='text-gray-500 font-semibold'>
            ¿No tienes una cuenta?
          </Text>
          <TouchableOpacity
            className='mb-8'
            onPress={() => navigation.navigate("register")}>
            <Text className='font-semibold text-yellow-500'> Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
