import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Badges() {
    return <View style={css('bg-body')}>
        <Text style={css('h1')}>
            {'Badges'}
        </Text>

        <View style={css('bg-panel p-1 rounded-3')}>

            <View style={css('row flex-wrap mb-1')}>
                <View style={css('badge bg-blue mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-indigo mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-purple mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-pink mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-red mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-orange mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-yellow mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-green mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-teal mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-cyan mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray-1 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray-2 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray-3 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray-4 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray-5 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-gray-dark mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-primary mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-secondary mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-success mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-info mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-warning mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-danger mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-white mr-1 mb-1')}>
                    <Text style={css('text text-black text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-light mr-1 mb-1')}>
                    <Text style={css('text text-black text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-dark mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge bg-black mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
            </View>

            <View style={css('bt-1 bb-1 row justify-content-between py-1')}>
                <Text style={css('text align-self-center')}>
                    {'Some Option 1'}
                </Text>
                <View style={css('badge bg-primary')}>
                    <Text style={css('text text-white text-bold')}>
                        {'14'}
                    </Text>
                </View>
            </View>
            <View style={css('mb-2 bb-1 row justify-content-between py-1')}>
                <Text style={css('text align-self-center')}>
                    {'Some Option 2'}
                </Text>
                <View style={css('badge bg-purple')}>
                    <Text style={css('text text-white text-bold')}>
                        {'14'}
                    </Text>
                </View>
            </View>

            <View style={css('btn-primary mb-1 inline')}>
                <Text style={css('text-white')}>
                    {'Some Button'}
                </Text>
                <View style={css('badge badge-fixed badge-sm bg-danger')}>
                    <Text style={css('text text-white text-bold')}>
                        {'99+'}
                    </Text>
                </View>
            </View>

        </View>

    </View>;
}
