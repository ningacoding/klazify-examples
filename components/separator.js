import {css} from 'klazify';
import {View} from 'react-native';

export default function Separator({style}) {
    return <View style={[css({height: 1}), css('bg-gray-2'), style]}/>;
}
