import {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
/**
 * You can use init() method directly,
 * we are adding an alias as example, you can use an alias when another init() method conflicts with Klazify init method.
 */
import {css, init as klazify, value} from 'klazify';

import {StatusBar} from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p';
import {Roboto_400Regular, useFonts} from '@expo-google-fonts/roboto';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultTheme from './default.theme';

klazify(defaultTheme);

export default function App() {
  
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    Roboto_400Regular,
  });
  
  const [isRender, setIsRender] = useState(true);
  
  useEffect(() => {
    setIsRender(true);
  }, [isRender]);
  
  if (!fontsLoaded || !isRender) {
    return <AppLoading/>;
  }
  
  return (
    <ScrollView style={css('flex')}
                contentContainerStyle={css('flex-grow pt-8 bg-purple-900')}>
      <StatusBar style="light"
                 backgroundColor={value('$purple900')}/>
      <View style={css('row')}>
        <View style={css('flex-1 h-2 bg-green-500')}/>
        <View style={css('flex-1 h-2 bg-yellow-500')}/>
        <View style={css('flex-1 h-2 bg-red-500')}/>
        <View style={css('flex-1 h-2 bg-blue-500')}/>
      </View>
      <View style={css('bg-purple-700 p-4 shadow')}>
        <Text style={css('text text-md text-bold text-center text-white')}>
          Klazify is a Style Sheet utility
        </Text>
      </View>
      <View style={css('flex-1 p-4 pt-8 bg-white')}>
        <Text style={css('text text-justify')}>
          Klazify reuse styles just like CSS classes, highly inspired
          in <Text style={css('text-cyan-600 text-bold')}>Tailwindcss</Text>, but with
          the React Native limitations / features. It gives a profesional and consistent look and feel, it also can
          improve the time and the way you develop with React Native.
        </Text>
        <Text style={css('text mt-4 text-justify')}>
          Klazify loads all the Style Sheets from classes at the App launch and never more you StyleSheet.create()
          again, improving performance at runtime.
        </Text>
        <View style={css('flex-row items-center mt-4 alert-warning p-4 bg-yellow-50 b-1 border-yellow-300 rounded-lg')}>
          <MaterialCommunityIcons name={'alert'}
                                  style={css('icon icon-md text-yellow-500 center mr-4')}/>
          <Text style={css('flex-1 text text-justify text-yellow-600')}>
            {'Klazify is NOT a component library, you can build components just by combining, creating or overriding the provided classes.'}
          </Text>
        </View>
        
        <View style={css('pt-4 pb-2 border rounded border-gray-200 mt-4 flex')}>
          <View style={css('flex-row flex-wrap')}>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-3xs text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-2xs text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-xs text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-sm text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-md text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-lg text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-xl text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-2xl text-primary mr-2 mb-2')}/>
            </View>
            <View style={css('col-1 items-center')}>
              <MaterialCommunityIcons name={'circle'}
                                      style={css('icon icon-3xl text-primary mr-2 mb-2')}/>
            </View>
          </View>
        </View>
        
        <View style={css('py-4')}>
          <View style={css('rounded bg-blue-600 flex-row center p-1')}>
            <View style={css('absolute p-1 left-2 bg-blue-800 rounded')}>
              <MaterialCommunityIcons name={'check'}
                                      style={css('icon text-white')}/>
            </View>
            <Text style={css('flex-1 text text-white text-center mx-10 py-2 border-r border-blue-500')}>
              {'PRESS ME'}
            </Text>
            <View style={css('absolute p-2 right-0')}>
              <MaterialCommunityIcons name={'chevron-right'}
                                      style={css('icon text-white')}/>
            </View>
          </View>
        </View>
      </View>
    
    </ScrollView>
  );
  
}
