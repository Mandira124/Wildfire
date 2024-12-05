import React, { useState } from 'react'; // Import useState
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const blocks = Array.from({ length: 9 }, (_, index) => `Block ${index + 1}`);

export default function Home() {
  // State array to track hover states for each block
  const [hoveredBlocks, setHoveredBlocks] = useState(Array(9).fill(false));

  const handlePressIn = (index) => {
    setHoveredBlocks((prev) => {
      const newHoveredBlocks = [...prev];
      newHoveredBlocks[index] = true; // Set the hovered block to true
      return newHoveredBlocks;
    });
  };

  const handlePressOut = (index) => {
    setHoveredBlocks((prev) => {
      const newHoveredBlocks = [...prev];
      newHoveredBlocks[index] = false;
      return newHoveredBlocks;
    });
  };

  return (
    <View className="bg-violet-100">
    <View className="flex-1 flex-row flex-wrap justify-around gap-y-8 gap-x-4 items-center px-2 py-28 ">
      {blocks.map((block, index) => (
        <TouchableOpacity
          key={index}
          onPressIn={() => handlePressIn(index)} 
          onPressOut={() => handlePressOut(index)} 
          className={`w-28 h-28 rounded-2xl bg-purple-900 justify-center items-center transition-transform duration-150 ${hoveredBlocks[index] ? 'scale-150' : ''}`}
        >
          <FontAwesome name="home" size={36} color="white" />
          <Text className="text-white mt-2 font-bold">{block}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
}
