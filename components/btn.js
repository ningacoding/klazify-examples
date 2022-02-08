import {css} from 'klazify';
import {Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Btn({onPress, style, label, light = false, block, textStyle, iconRight, iconRightStyle}) {
    const Container = !!onPress && typeof onPress === 'function' ? TouchableOpacity : View;
    return <Container style={[css(`${block ? '' : 'inline'} rounded-5 center row`), style]}
                      onPress={onPress}>
        <Text style={[css(`text ${!!light ? 'text-black' : 'text-white'}`), textStyle]}>
            {label}
        </Text>
        {!!iconRight && <MaterialCommunityIcons name={iconRight}
                                                style={[css("icon text-light pl-1 icon-md"), iconRightStyle]}/>}
    </Container>;
}
