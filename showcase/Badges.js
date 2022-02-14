import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Badges() {
    return <View style={css('bg-body')}>
        <Text style={css('h1')}>
            {'Badges'}
        </Text>

        <View style={css('bg-panel p-1 rounded-3')}>

            <View style={css('row flex-wrap mb-1')}>
                <View style={css('badge-blue mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-indigo mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-purple mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-pink mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-red mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-orange mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-yellow mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-green mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-teal mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-cyan mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray-1 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray-2 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray-3 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray-4 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray-5 mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-gray-dark mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-primary mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-secondary mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-success mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-info mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-warning mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-danger mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-white mr-1 mb-1')}>
                    <Text style={css('text text-black text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-light mr-1 mb-1')}>
                    <Text style={css('text text-black text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-dark mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
                <View style={css('badge-black mr-1 mb-1')}>
                    <Text style={css('text text-white text-bold')}>{'27'}</Text>
                </View>
            </View>

            <View style={css('bt-1 bb-1 row justify-content-between py-1')}>
                <Text style={css('text align-self-center')}>
                    {'Some Option 1'}
                </Text>
                <View style={css('badge-primary')}>
                    <Text style={css('text text-white text-bold')}>
                        {'14'}
                    </Text>
                </View>
            </View>
            <View style={css('mb-2 bb-1 row justify-content-between py-1')}>
                <Text style={css('text align-self-center')}>
                    {'Some Option 2'}
                </Text>
                <View style={css('badge-purple')}>
                    <Text style={css('text text-white text-bold')}>
                        {'14'}
                    </Text>
                </View>
            </View>

            <View style={css('row')}>

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

                <View style={css('btn-dark mb-1 ml-2 inline row align-items-center rounded')}>
                    <Text style={css('text-white align-self-center mr-1')}>
                        {'Some Chip'}
                    </Text>
                    <View style={css('badge badge-sm bg-light')}>
                        <Text style={css('text text-primary text-bold')}>
                            {'99+'}
                        </Text>
                    </View>
                </View>

            </View>

        </View>

    </View>;
}
