import {Text, View} from 'react-native';
import {css} from 'klazify';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Tabs() {
    return <View>

        <Text style={css('h1')}>
            {'Tabs'}
        </Text>

        <View style={css('bb-1 row')}>
            <View style={css('rounded-t-3 bx-1 bt-1 tab tab-active bg-panel mx-half')}>
                <Text style={css('text p-1')}>
                    {'Active'}
                </Text>
            </View>
            <View style={css('rounded-t-3 bx-1 bt-1 tab tab-inactive bg-panel-50 mx-half')}>
                <Text style={css('text text-gray-4 p-1')}>
                    {'Inactive'}
                </Text>
            </View>
            <View style={css('rounded-t-3 bx-1 bt-1 tab tab-inactive bg-panel-50 mx-half disabled')}>
                <Text style={css('text text-gray-4 p-1')}>
                    {'Disabled'}
                </Text>
            </View>
            <View style={css('rounded-t-3 bx-1 bt-1 p-1 tab tab-inactive bg-panel-50 mx-half text')}>
                <MaterialCommunityIcons name={'plus'} style={css('icon text-gray-3')}/>
            </View>
        </View>

    </View>;
}
