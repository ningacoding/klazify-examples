import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Texts() {

    return <View>
        <Text style={css('text h1')}>
            {'Typography'}
        </Text>

        <Text style={css('text h1')}>
            {'Title H1'}
        </Text>

        <Text style={css('text h2')}>
            {'Title H2'}
        </Text>

        <Text style={css('text h3')}>
            {'Title H3'}
        </Text>

        <Text style={css('text h4')}>
            {'Title H4'}
        </Text>

        <Text style={css('text h5')}>
            {'Title H5'}
        </Text>

        <Text style={css('text h6')}>
            {'Title H6'}
        </Text>
    </View>;

}
