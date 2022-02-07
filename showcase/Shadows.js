import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Shadows() {
    return <View style={css('')}>
        <Text style={css('h1')}>
            {'Shadows'}
        </Text>

        <View style={css('row flex-wrap justify-content-between')}>

            <View style={[css('shadow-sm bg-white align-items-center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text center')}>
                    {'shadow-sm'}
                </Text>
            </View>
            <View style={[css('shadow bg-white align-items-center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text center')}>
                    {'shadow'}
                </Text>
            </View>
            <View style={[css('shadow-md bg-white align-items-center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text center')}>
                    {'shadow-md'}
                </Text>
            </View>
            <View style={[css('shadow-lg bg-white align-items-center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text center')}>
                    {'shadow-lg'}
                </Text>
            </View>
            <View style={[css('shadow-none bg-light align-items-center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text center')}>
                    {'shadow-none'}
                </Text>
            </View>

        </View>

    </View>;
}
