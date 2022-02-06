import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Grid() {
    return <View style={css('')}>
        <Text style={css('h1')}>
            {'Grid'}
        </Text>
        <View style={css('row')}>
            <Text style={css('col text-center b-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
        </View>
        <View style={css('row')}>
            <Text style={css('col text-center bb-1 bx-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
        </View>
        <View style={css('row')}>
            <Text style={css('col text-center bb-1 bx-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
        </View>
        <View style={css('row')}>
            <Text style={css('col text-center bb-1 bx-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
        </View>
        <View style={css('row')}>
            <Text style={css('col text-center bb-1 bx-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
        </View>
        <View style={css('row')}>
            <Text style={css('col-auto text-center bb-1 bx-1 p-1 bg-gray-1')}>
                {'Column that adjusts to it\'s content'}
            </Text>
            <Text style={css('col text-center bb-1 br-1 p-1 bg-gray-1')}>
                {'Column'}
            </Text>
        </View>

    </View>;
}
