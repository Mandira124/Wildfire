import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const Profile = () => {
  const user = {
    username: 'Dikshya Lamichhane',
    batch: 'Batch 2024',
    department: 'Computer Engineering',
    joinDate: 'January 15, 2022',
    profilePic: 'https://via.placeholder.com/150', // Replace with actual URL if available
  };

  return (
    <ScrollView className="flex-1 bg-violet-50 p-6">
      {/* Profile Header */}
      <View className="flex items-center mb-6">
        <Image
          source={{ uri: user.profilePic }}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-3xl font-bold text-gray-800">{user.username}</Text>
        <Text className="text-xl text-gray-500">{user.department}</Text>
        <Text className="text-md text-gray-400">{user.batch}</Text>
      </View>

      {/* User Information */}
      <View className="bg-white p-6 rounded-lg shadow-lg">
        <Text className="text-xl font-semibold text-gray-800 mb-2">User Information</Text>
        <Text className="text-md text-gray-700 mb-2">Joined: {user.joinDate}</Text>
        <Text className="text-md text-gray-700">Department: {user.department}</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
