import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {css} from 'klazify';

export default function Button({onPress}) {
  const [isPressedIn, setIsPressedIn] = useState(false);
  return (
    <View style={css(`rounded border border-blue-700 ${isPressedIn ? 'bg-blue-700' : 'bg-blue-600'}`)}>
      <Pressable
        onPressIn={() => setIsPressedIn(true)}
        onPressOut={() => setIsPressedIn(false)}
        onPress={onPress}
        style={css('rounded')}>
        <View style={css(`flex-row center ${isPressedIn ? 'border border-blue-800' : 'border border-blue-500'} rounded`)}>
          <View style={css('absolute p-1 left-1 rounded')}>
            <MaterialCommunityIcons name={'facebook'}
                                    style={css(`icon ${isPressedIn ? 'text-gray-300' : 'text-white'}`)}/>
          </View>
          <Text style={css(`flex-1 text ${isPressedIn ? 'text-gray-300' : 'text-white'} text-center mx-10 py-2`)}>
            {'PRESS ME'}
          </Text>
          <View style={css('absolute p-1 right-1 rounded')}>
            <MaterialCommunityIcons name={'chevron-right'}
                                    style={css(`icon ${isPressedIn ? 'text-gray-300' : 'text-white'}`)}/>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const randomHexColor = () => {
  return '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};
