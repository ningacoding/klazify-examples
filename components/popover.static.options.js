import {Text, TouchableOpacity, View} from 'react-native';
import {css} from 'klazify';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function PopoverStaticOptions({onPress}) {
    return <View>

        <TouchableOpacity style={css('row center p-1')}
                          onPress={onPress}>
            <MaterialCommunityIcons name={'checkbox-blank-circle-outline'}
                                    style={css('icon text-primary mr-1')}/>
            <Text style={css('text flex')}>
                {'Option 1'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css('row center p-1')}
                          onPress={onPress}>
            <MaterialCommunityIcons name={'checkbox-blank-circle-outline'}
                                    style={css('icon text-primary mr-1')}/>
            <Text style={css('text flex')}>
                {'Option 2'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css('row center p-1')}
                          onPress={onPress}>
            <MaterialCommunityIcons name={'checkbox-blank-circle'}
                                    style={css('icon text-primary mr-1')}/>
            <Text style={css('text flex')}>
                {'Klazify'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={css('row center p-1')}
                          onPress={onPress}>
            <MaterialCommunityIcons name={'checkbox-blank-circle-outline'}
                                    style={css('icon text-primary mr-1')}/>
            <Text style={css('text flex')}>
                {'Option 4'}
            </Text>
        </TouchableOpacity>

    </View>;
}
