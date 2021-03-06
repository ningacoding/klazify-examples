import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Progress({progress = 0, style, progressStyle, removeLabel = false}) {
    return <View style={[css(`bg-gray-1 rounded-5 ${progress === 0 ? 'p-1' : ''}`), style]}>
        {progress > 0 && <View style={[
            css({width: progress + '%'}),
            css(`bg-primary ${progress === 100 ? 'rounded-5' : 'rounded-l-5'} flex`),
            progressStyle,
        ]}>
            <Text style={css('text-white text-sm text-bold p-half text-align-center flex')}>
                {progress > 9.9999 && !removeLabel ? progress + '%' : ''}
            </Text>
        </View>}
    </View>;
}
