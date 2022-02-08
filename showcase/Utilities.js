import {Text, View} from 'react-native';
import {css} from 'klazify';
import Separator from '../components/separator';
import Progress from '../components/progress';

export default function Utilities() {
    return <View style={css('')}>
        <Text style={css('h1')}>
            {'Utilities'}
        </Text>

        <Text style={css('text h3')}>
            {'Borders, Margin and Padding'}
        </Text>
        <Text style={css('text mb-1')}>
            {'are available with b-#, p-# and m-#. From 1 to 8.'}
        </Text>
        <View style={css('p-1 b-1 b-cyan mb-1')}>
            <Text style={css('p-1 bg-gray-1')}>
                {'p-1 (padding 1) with b-1 b-cyan'}
            </Text>
        </View>
        <View style={css('pl-3 b-1 b-cyan mb-1')}>
            <Text style={css('p-1 bg-gray-1')}>
                {'pl-3 (padding left 3)'}
            </Text>
        </View>
        <View style={css('px-3 b-1 b-cyan mb-1')}>
            <Text style={css('p-1 bg-gray-1')}>
                {'px-3 (padding applied to x axis)'}
            </Text>
        </View>
        <View style={css('b-1 mb-1')}>
            <Text style={css('p-1 m-1 bg-gray-1 b-1 b-cyan')}>
                {'m-1 (margin 1) with b-1 b-cyan'}
            </Text>
        </View>
        <View style={css('b-1 mb-1')}>
            <Text style={css('p-1 mr-3 bg-gray-1 b-1 b-cyan')}>
                {'mr-3 (margin right 3)'}
            </Text>
        </View>
        <View style={css('b-1 mb-1')}>
            <Text style={css('p-1 my-2 bg-gray-1 b-1 b-cyan')}>
                {'my-2 (margin applied to y axis)'}
            </Text>
        </View>
        <Text style={css('text h3 mt-1')}>
            {'Separator 👇'}
        </Text>
        <Separator/>

        <Text style={css('text h3 mt-1')}>
            {'Progress Bar'}
        </Text>

        <Progress progress={0}/>
        <Progress progress={25} style={css('mt-1')} progressStyle={css('bg-danger')}/>
        <Progress progress={45} style={css('mt-1')} progressStyle={css('bg-warning')} removeLabel/>
        <Progress progress={65} style={css('mt-1')}/>
        <Progress progress={100} style={css('mt-1')} progressStyle={css('bg-success')}/>

        <Text style={css('text h3')}>
            {'Backgrounds'}
        </Text>

        <Text style={css('bg-transparent p-1')}>{'bg-transparent'}</Text>
        <Text style={css('bg-body p-1')}>{'bg-body'}</Text>
        <Text style={css('bg-blue p-1 text-white')}>{'bg-blue'}</Text>
        <Text style={css('bg-indigo p-1 text-white')}>{'bg-indigo'}</Text>
        <Text style={css('bg-purple p-1 text-white')}>{'bg-purple'}</Text>
        <Text style={css('bg-pink p-1 text-white')}>{'bg-pink'}</Text>
        <Text style={css('bg-red p-1 text-white')}>{'bg-red'}</Text>
        <Text style={css('bg-orange p-1 text-white')}>{'bg-orange'}</Text>
        <Text style={css('bg-yellow p-1 text-white')}>{'bg-yellow'}</Text>
        <Text style={css('bg-green p-1 text-white')}>{'bg-green'}</Text>
        <Text style={css('bg-teal p-1 text-white')}>{'bg-teal'}</Text>
        <Text style={css('bg-cyan p-1 text-white')}>{'bg-cyan'}</Text>
        <Text style={css('bg-gray p-1 text-white')}>{'bg-gray'}</Text>
        <Text style={css('bg-gray-1 p-1')}>{'bg-gray-1'}</Text>
        <Text style={css('bg-gray-2 p-1')}>{'bg-gray-2'}</Text>
        <Text style={css('bg-gray-3 p-1 text-white')}>{'bg-gray-3'}</Text>
        <Text style={css('bg-gray-4 p-1 text-white')}>{'bg-gray-4'}</Text>
        <Text style={css('bg-gray-5 p-1 text-white')}>{'bg-gray-5'}</Text>
        <Text style={css('bg-gray-dark p-1 text-white')}>{'bg-gray-dark'}</Text>
        <Text style={css('bg-primary p-1 text-white')}>{'bg-primary'}</Text>
        <Text style={css('bg-secondary p-1 text-white')}>{'bg-secondary'}</Text>
        <Text style={css('bg-success p-1 text-white')}>{'bg-success'}</Text>
        <Text style={css('bg-info p-1 text-white')}>{'bg-info'}</Text>
        <Text style={css('bg-warning p-1 text-white')}>{'bg-warning'}</Text>
        <Text style={css('bg-danger p-1 text-white')}>{'bg-danger'}</Text>
        <Text style={css('bg-white p-1')}>{'bg-white'}</Text>
        <Text style={css('bg-light p-1')}>{'bg-light'}</Text>
        <Text style={css('bg-dark p-1 text-white')}>{'bg-dark'}</Text>
        <Text style={css('bg-black p-1 text-white')}>{'bg-black'}</Text>

    </View>;
}
