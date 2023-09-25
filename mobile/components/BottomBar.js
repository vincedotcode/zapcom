import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function BottomBar() {
  return (
    <View className='flex-row bg-gray-800 p-4 justify-between mb-0' >
      <Icon name="home" size={30} color="#FFF" className='ml-4' />
      <Icon name="search" size={30} color="#FFF" className='ml-4' />
      <Icon name="add-circle" size={30} color="#FFF" className='ml-4' />
      <Icon name="notifications" size={30} color="#FFF" className='ml-4' />
      <Icon name="person" size={30} color="#FFF"className='ml-4' />
    </View>
  );
}

export default BottomBar;
