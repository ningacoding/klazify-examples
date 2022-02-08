import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Shadows() {
    return <View style={css('')}>
        <Text style={css('h1')}>
            {'Shadows'}
        </Text>

        <View style={css('row flex-wrap justify-content-between')}>

            <View style={[css('shadow-sm bg-panel center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text')}>
                    {'shadow-sm'}
                </Text>
            </View>
            <View style={[css('shadow bg-panel center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text')}>
                    {'shadow'}
                </Text>
            </View>
            <View style={[css('shadow-md bg-panel center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text')}>
                    {'shadow-md'}
                </Text>
            </View>
            <View style={[css('shadow-lg bg-panel center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text')}>
                    {'shadow-lg'}
                </Text>
            </View>
            <View style={[css('shadow-none bg-panel center mb-2'), css({width: 100, height: 100})]}>
                <Text style={css('text')}>
                    {'shadow-none'}
                </Text>
            </View>

        </View>

    </View>;
}
