import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import LoginSVG from '../assets/images/Login.svg'; 

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View className="flex flex-col bg-white  items-left justify-center w-full h-full">
      <View className="flex flex-col justify-center items-center w-full h-full p-4">
      <Text className="text-[#49225B] text-4xl font-bold mb-4">Login</Text>
      <LoginSVG width={400} height={400} className="border-none" />
      <View className="flex flex-col justify-between  w-80 h-auto p-8 rounded-lg ">
        <View className="flex flex-row items-center border w-full  p-2 mb-4 rounded-lg">
          <FontAwesome name="envelope" size={20} color="#6E3482" />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="ml-2 flex-1"
          />
        </View>

         <View className="flex flex-row items-center p-2 border mb-4  w-full rounded-lg">
          <FontAwesome name="lock" size={20} color="#6E3482" />
          <TextInput
            placeholder="Password"
            secureTextEntry={passwordVisible}
            value={password}
            onChangeText={setPassword}
            className="ml-2 flex-1 "
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <FontAwesome
              name={passwordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#49225B"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity >
          <Text className="text-[#49225B] flex flex-row justify-end text-sm underline font-bold mt-[-6px] mb-1">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" bg-[#49225B] p-2 flex flex-row justify-center items-center rounded-full w-full mt-1">
          <Text className="text-white text-xl pr-4 font-semibold ">Login</Text>
          <FontAwesome name="arrow-right" size={20} color="white" />
        </TouchableOpacity>

        
        <View className="flex flex-row  mb-[-32px] p-1">
        <Text className="text-[#49225B] text-sm pr-4 font-bold ">Dont Have  an Account?</Text>

        <TouchableOpacity className=" flex justify-center">
          <Text className="text-[#49225B] underline text-sm pr-4 font-bold ">Sign Up</Text>
         </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
}
