import {Text, View} from 'react-native';
import {css, init} from 'klazify';
import Btn from '../components/btn';
import customTheme from '../custom.theme';
import defaultTheme from '../default.theme';

export default function Themes({onChange}) {

    const setTheme = (theme) => {
        init(theme === 'custom' ? customTheme : defaultTheme);
        if (typeof onChange === 'function') {
            onChange();
        }
    }

    return <View>
        <Text style={css('h1')}>
            {'Theming'}
        </Text>
        <View style={css('p-1 bg-panel')}>
            <Text style={css('text')}>
                {'By default, Klazify has a theme with predefined colors, but you can create your own theme, we added a Dark theme example for learn purposes.'}
            </Text>
            <View style={css('row mt-1')}>
                <Btn style={css('btn-light mr-1 flex')}
                     textStyle={css('text text-dark')}
                     label={'Light'}
                     onPress={() => setTheme('default')}/>
                <Btn style={css('btn-dark flex')}
                     textStyle={css('text-white')}
                     label={'Dark'}
                     onPress={() => setTheme('custom')}/>
            </View>
        </View>
    </View>;
}
