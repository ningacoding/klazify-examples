import {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
/**
 * You can use init() method directly,
 * we are adding an alias as example, you can use an alias when another init() method conflicts with Klazify init method.
 */
import {css, init as klazify} from 'klazify';

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
    <ScrollView style={css('flex bg-body')}
                contentContainerStyle={css('flex-grow p-4 pt-8')}>
      <StatusBar style="auto"/>
      <Text style={css('text h3')}>
        Klazify is a Style Sheet utility
      </Text>
      <Text style={css('text')}>
        Klazify reuse styles just like CSS classes, highly inspired in bootstrap, but with
        the React Native limitations / features. It gives a profesional and consistent look and feel, it also can
        improve the time and the way you develop with React Native.
      </Text>
      <Text style={css('text mt-4')}>
        Klazify loads all the Style Sheets from classes at the App launch and never more you StyleSheet.create()
        again, improving performance at runtime.
      </Text>
      
      <View style={css('skew-x-24')}>
        <View style={css('skew-y-12 flex-row items-center mt-4 alert-warning p-4 bg-yellow-50 b-1 border-yellow-300 rounded-lg')}>
          <MaterialCommunityIcons name={'alert'}
                                  style={css('icon icon-md text-yellow-500 center mr-4')}/>
          <Text style={css('flex text text-justify text-yellow-600')}>
            {'Klazify is NOT a component library, you can build the below example components just by combining, creating or overriding built-in classes.'}
          </Text>
        </View>
      </View>
    
    </ScrollView>
  );
  
}
