import {css} from 'klazify';
import {Text, TouchableOpacity} from 'react-native';

export default function Btn({onPress, style, label, light = false, textStyle}) {
    return <TouchableOpacity style={[css('inline rounded-5'), style]}
                             onPress={onPress}>
        <Text style={[css(`text ${!!light ? 'text-black' : 'text-white'}`), textStyle]}>
            {label}
        </Text>
    </TouchableOpacity>;
}
