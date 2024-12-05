import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledFontAwesome = styled(FontAwesome);

export default function Footer() {
  const [activeButton, setActiveButton] = useState('');

  return (
    <StyledView className="flex flex-row justify-between items-center bg-purple-950 p-2">
      
      <TouchableOpacity onPress={() => setActiveButton('bars')}>
        <StyledFontAwesome
          name="bars"
          size={activeButton === 'bars' ? 32 : 24}
          color={activeButton === 'bars' ? 'white' : 'gray'}
          className={`${activeButton === 'bars' ? 'text-white' : 'text-gray-500'} p-2`}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setActiveButton('user')}>
        <StyledFontAwesome
          name="user"
          size={activeButton === 'user' ? 32 : 24}
          color={activeButton === 'user' ? 'white' : 'gray'}
          className={`${activeButton === 'user' ? 'text-white' : 'text-gray-500'} p-2`}
        />
      </TouchableOpacity>
    </StyledView>
  );
}
