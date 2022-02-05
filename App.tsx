import {StatusBar} from 'expo-status-bar';
import {ScrollView, Text} from 'react-native';
import {css, init as klazify} from 'klazify';
import {useState} from 'react';
import Buttons from './showcase/Buttons';
import Texts from './showcase/Texts';

export default function App() {
  
  klazify({
    theme: {
      blue: '#1f76a9',
    },
    extraGlobalVars: {
      '$rem': 12,
      '$blue-custom': '#37a1e3',
      // '$primary': '#eaa868',
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
      };
    },
  });
  
  const [toggleBtnColor, setToggleBtnColor] = useState(true);
  
  return (
    <ScrollView style={css('flex')}
                contentContainerStyle={css('flex-grow p-1 mt-2')}>
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
        Klazify loads all the Style Sheets from classes when the App launches and never more you StyleSheet.create()
        again, improving performance at runtime.
      </Text>
      <Buttons/>
      <Texts/>
    </ScrollView>
  );
  
}
