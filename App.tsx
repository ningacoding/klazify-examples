import {StatusBar} from 'expo-status-bar';
import {ScrollView, Text} from 'react-native';
import {css, init as klazify} from 'klazify';
import Buttons from './showcase/Buttons';
import Texts from './showcase/Texts';
import {PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p';
import {Roboto_400Regular, useFonts} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Grid from './showcase/Grid';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    Roboto_400Regular,
  });
  
  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  
  klazify({
    theme: {
      defaultFontFamily: 'Roboto_400Regular',
      blue: '#1f76a9',
    },
    extraGlobalVars: {
      '$rem': 12,
      '$blue-custom': '#37a1e3',
    },
    customClasses: () => {
      return {
        'custom-class': {
          backgroundColor: '$blue-custom',
        },
        'bg-blue': {
          backgroundColor: '$blue',
        },
        'b-blue': {
          borderColor: '$blue',
        },
        'col': {
          flex: 1,
          flexDirection: 'column',
        },
        'col-auto': {
          flexDirection: 'column',
        },
      };
    },
  });
  
  return (
    <ScrollView style={css('flex')}
                contentContainerStyle={css('flex-grow p-1 pt-2')}>
      <StatusBar style="auto"/>
      <Text style={css('text h3')}>
        Klazify is a Style Sheet utility
      </Text>
      <Text style={css('text text-md')}>
        Klazify reuse styles just like CSS classes, highly inspired in bootstrap, but with
        the React Native limitations / features. It gives a profesional and consistent look and feel, it also can
        improve the time and the way how you develop with React Native.
      </Text>
      <Text style={css('text text-md mt-1')}>
        Klazify loads all the Style Sheets from classes at the App launch and never more you StyleSheet.create()
        again, improving performance at runtime.
      </Text>
      <Buttons/>
      <Texts/>
      <Grid/>
    </ScrollView>
  );
  
}
