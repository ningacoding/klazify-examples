import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Grid() {
    return <View style={css('')}>
        <Text style={css('h1')}>
            {'Grid'}
        </Text>
        <View style={css('flex')}>
            <View style={css('row')}>
                <View style={css('col b-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col-auto bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column auto width (col-auto)'}
                    </Text>
                </View>
                <View style={css('col bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col-1 bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column 1'}
                    </Text>
                </View>
                <View style={css('col-3 bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column 3'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col-2 bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column 2'}
                    </Text>
                </View>
                <View style={css('col-2 bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column 2'}
                    </Text>
                </View>
            </View>
            <View style={css('row')}>
                <View style={css('col-3 bb-1 bx-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column 3'}
                    </Text>
                </View>
                <View style={css('col-1 bb-1 br-1 bg-panel')}>
                    <Text style={css('text text-center p-1')}>
                        {'Column 1'}
                    </Text>
                </View>
            </View>
        </View>

        <Text style={css('h1')}>
            {'Alignment'}
        </Text>

        <View style={[css({height: 100}), css('p-1 bg-panel align-items-start mb-1')]}>
            <Text style={css('text text-center b-1 p-1 bg-gray-2')}>
                {'align-items-start'}
            </Text>
        </View>
        <View style={[css({height: 100}), css('p-1 bg-panel align-items-center mb-1')]}>
            <Text style={css('text text-center b-1 p-1 bg-gray-2')}>
                {'align-items-center'}
            </Text>
        </View>
        <View style={[css({height: 100}), css('p-1 bg-panel align-items-end mb-1')]}>
            <Text style={css('text text-center b-1 p-1 bg-gray-2')}>
                {'align-items-end'}
            </Text>
        </View>

        <View style={[css({height: 250}), css('p-1 bg-panel justify-content-between mb-1')]}>
            <Text style={css('text text-center b-1 p-1 bg-gray-2')}>
                {'justify-content-between'}
            </Text>
            <Text style={css('text text-center b-1 p-1 bg-gray-2')}>
                {'justify-content-between'}
            </Text>
            <Text style={css('text text-center b-1 p-1 bg-gray-2')}>
                {'justify-content-between'}
            </Text>
        </View>

        <View style={css('p-1 bg-panel  mb-1')}>
            <Text style={css('text text-center align-self-start b-1 p-1 bg-gray-2 mb-1')}>
                {'align-self-start'}
            </Text>
            <Text style={css('text text-center align-self-center b-1 p-1 bg-gray-2 mb-1')}>
                {'align-self-center (alias: center)'}
            </Text>
            <Text style={css('text text-center align-self-end b-1 p-1 bg-gray-2')}>
                {'align-self-end'}
            </Text>
        </View>

    </View>;
}
