/** @format */

import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <View
      className='rounded-b-full h-72'
      style={{ backgroundColor: themeColors.bg }}>
      <View className='bg-white px-5 mx-4 pt-5  mb-5 rounded-3xl mt-4'>
        <Text
          style={{ color: themeColors.bg }}
          className='font-bold text-2xl text-center mb-3'>
          Crear Cuenta
        </Text>

        <TouchableOpacity className='py-2  mb-2 bg-gray-900 rounded-xl flex-row justify-center items-center'>
          <Image
            source={require("../../../assets/icons/upload.png")}
            className='w-8 h-8 mr-3'
          />
          <Text className='text-xl font-bold text-center text-white'>
            Subir foto perfil
          </Text>
        </TouchableOpacity>

        <Text className='text-gray-700 ml-4 mb-1 font-bold'>Nombre</Text>
        <TextInput
          keyboardType='email-address'
          className='p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3'
          placeholder='Tu nombre'
          value=''
        />

        <Text className='text-gray-700 ml-4 mb-1 font-bold'>
          Correo Electronico
        </Text>
        <TextInput
          keyboardType='email-address'
          className='p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3'
          placeholder='Tu Email'
          value=''
        />

        <Text className='text-gray-700 ml-4 mb-1 font-bold'>Contraseña</Text>
        <TextInput
          className='p-3 bg-gray-100 text-gray-700 rounded-2xl'
          secureTextEntry
          placeholder='Tu contraseña'
          value=''
        />

        <TouchableOpacity className='flex items-end'>
          <Text className='text-gray-700 my-4 font-bold'>
            Olvide mi contraseña
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className='py-2 bg-yellow-400 rounded-xl'>
          <Text className='text-xl font-bold text-center text-white'>
            Registrar
          </Text>
        </TouchableOpacity>

        <View className='flex-row justify-center space-x-12 mt-5'>
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

        <View className='flex-row justify-center mt-5 pb-10'>
          <Text className='text-gray-500 font-semibold'>
            ¿Ya tienes una cuenta?
          </Text>
          <TouchableOpacity
            className=''
            onPress={() => navigation.navigate("login")}>
            <Text className='font-semibold text-yellow-500'>
              {" "}
              Inicia Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
