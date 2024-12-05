import React, { useState, useRef } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import VerificationSVG from '../assets/images/Verification.svg'; 

export default function VerificationPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']); // 6 code spaces
  const inputRefs = useRef([]);

  const handleCodeChange = (value, index) => {
    let newCode = [...code];
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View className="flex flex-col bg-white items-left justify-center w-full h-full">
      <View className="flex flex-col justify-center items-center w-full h-full p-4">
        <Text className="text-[#49225B] text-4xl font-bold mb-4">Verification</Text>
        <VerificationSVG width={400} height={400} className="border-none" />
        
        
        <Text className="text-purple-950 text-lg mb-4">
          Please enter the verification code sent to your email.
        </Text>

        
        <View className="flex flex-row justify-between mb-8">
          {code.map((digit, index) => (
            <TextInput
              key={index}
              value={digit}
              onChangeText={(value) => handleCodeChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              maxLength={1}
              keyboardType="numeric"
              ref={(el) => (inputRefs.current[index] = el)}
              className="bg-violet-200 text-center text-xl rounded-lg w-10 h-12 mx-1"
            />
          ))}
        </View>

        
        <TouchableOpacity className="bg-[#49225B] py-3 px-8 flex flex-row justify-center items-center rounded-full">
          <Text className="text-white text-xl font-bold">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
