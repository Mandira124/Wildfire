import React from 'react';
import { View, Text, FlatList } from 'react-native';

const NotificationsPage = () => {
  
  const notifications = [
    { id: '1', message: 'Your event registration was successful.' },
    { id: '2', message: 'Your profile has been updated.' },
    { id: '3', message: 'New updates are available in the app.' },
    { id: '4', message: 'Your subscription is expiring soon.' },
  ];

  const renderNotification = ({ item }) => (
    <View className="bg-white p-4 mb-2 rounded-lg shadow">
      <Text className="text-lg font-semibold">{item.message}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
      />
    </View>
  );
};

export default NotificationsPage;
