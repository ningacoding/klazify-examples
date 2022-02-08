import {StatusBar} from 'expo-status-bar';
import {ScrollView, Text, View} from 'react-native';

/**
 * You can use init() method directly,
 * we are adding an alias as example, you can use it when another init() method conflicts with Klazify init method.
 */
import {css, init as klazify} from 'klazify';
import {PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p';
import {Roboto_400Regular, useFonts} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Buttons from './showcase/Buttons';
import Texts from './showcase/Texts';
import Grid from './showcase/Grid';
import Utilities from './showcase/Utilities';
import Cards from './showcase/Cards';
import Shadows from './showcase/Shadows';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Alerts from './showcase/Alerts';
import Forms from './showcase/Forms';
import PopoverExample from './showcase/Popover';

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
        'custom-font': {
          fontFamily: 'PressStart2P_400Regular',
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
        improve the time and the way you develop with React Native.
      </Text>
      <Text style={css('text text-md mt-1')}>
        Klazify loads all the Style Sheets from classes at the App launch and never more you StyleSheet.create()
        again, improving performance at runtime.
      </Text>
      
      <View style={css('row center mt-1 alert-warning p-1 rounded-3')}>
        <MaterialCommunityIcons name={'alert'}
                                style={css('icon icon-md text-warning center mr-1')}/>
        <Text style={css('flex text text-alert-warning center')}>
          {'Klazify is NOT a component library, you can build the below example components just by combining, creating or overriding built-in classes.'}
        </Text>
      </View>
      
      <Buttons/>
      <Texts/>
      <Grid/>
      <PopoverExample/>
      <Forms/>
      <Utilities/>
      <Shadows/>
      <Cards/>
      <Alerts/>
    
    </ScrollView>
  );
  
}
