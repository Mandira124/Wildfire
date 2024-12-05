import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
  const [activeButton, setActiveButton] = useState('home'); 

  return (
    <View className="flex flex-row justify-between items-center bg-purple-950 p-4 ">
      
      <TouchableOpacity onPress={() => setActiveButton('home')}>
        <FontAwesome
          name="home"
          size={activeButton==='home'? 32 : 24}
          color={activeButton === 'home' ? 'white' : 'gray'}
          className="p-2"
        />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => setActiveButton('search')}>
        <FontAwesome
          name="calendar-o"
          size={activeButton==='search'? 32 : 24}
          color={activeButton === 'search' ? 'white' : 'gray'}
          className="p-2"
        />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => setActiveButton('bell')}>
        <FontAwesome
          name="bell"
          size={activeButton==='bell'? 32 : 24}
          color={activeButton === 'bell' ? 'white' : 'gray'}
          className="p-2"
        />
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => setActiveButton('user')}>
        <FontAwesome
          name="cog"
          size={activeButton==='user'? 32 : 24}
          color={activeButton === 'user' ? 'white' : 'gray'}
          className="p-2"
        />
      </TouchableOpacity>
    </View>
  );
}
