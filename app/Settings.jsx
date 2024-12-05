import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Settings = () => {
  return (
    <View className="flex-1 p-6 bg-violet-100">
      <Text className="text-4xl font-bold mb-6 text-purple-900">Settings</Text>
      <View className="mb-1">
        <TouchableOpacity className="bg-white p-3 rounded-lg">
          <Text className="text-purple-900 font-bold text-left">Change Password</Text>
        </TouchableOpacity>
      </View>

      
      <View className="mb-1">
        <TouchableOpacity className="bg-white p-3 rounded-lg">
          <Text className="text-purple-900 font-bold text-left">Toggle Dark/Light Mode</Text>
        </TouchableOpacity>
      </View>

      
      <View className="mb-1">
        <TouchableOpacity className="bg-white p-3 rounded-lg">
          <Text className="text-purple-900 font-bold text-left">Go to Help Center</Text>
        </TouchableOpacity>
      </View>

      
      <View className="mb-1">
        <TouchableOpacity className="bg-white p-3 rounded-lg">
          <Text className="text-purple-900 font-bold text-left">Report Problem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
