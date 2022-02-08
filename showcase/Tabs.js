import {Text, View} from 'react-native';
import {css} from 'klazify';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Tabs() {
    return <View>

        <Text style={css('h1')}>
            {'Tabs'}
        </Text>

        <View style={css('bb-1 row')}>
            <Text style={css('rounded-t-3 bx-1 bt-1 p-1 tab tab-active bg-panel mx-half text')}>
                {'Active'}
            </Text>
            <Text style={css('rounded-t-3 bx-1 bt-1 p-1 tab tab-inactive bg-panel-50 mx-half text-gray-4 text')}>
                {'Tab Inactive'}
            </Text>
            <Text style={css('rounded-t-3 bx-1 bt-1 p-1 tab tab-inactive bg-panel-50 mx-half text-gray-4 text disabled')}>
                {'Disabled'}
            </Text>
            <View style={css('rounded-t-3 bx-1 bt-1 p-1 tab tab-inactive bg-panel-50 mx-half text')}>
                <MaterialCommunityIcons name={'plus'} style={css('icon text-gray-3')}/>
            </View>
        </View>

    </View>;
}
