import {Image, Text, View} from 'react-native';
import {css} from 'klazify';
import Btn from '../components/btn';
import Separator from '../components/separator';

export default function Cards() {
    return <View style={css('bg-body')}>
        <Text style={css('h1')}>
            {'Cards'}
        </Text>

        <View style={css('px-1')}>

            <View style={css('card mb-2')}>
                <Text style={css('text text-md text-bold p-1')}>
                    {'Card title'}
                </Text>
                <Separator/>
                <Image style={css('img img-16-9')}
                       source={{uri: 'https://picsum.photos/320/180'}}/>
                <Text style={css('text p-1')}>
                    {'This is a dummy text.'}
                </Text>
                <Separator/>
                <Btn style={css('m-1 btn-primary align-self-end')}
                     textStyle={css('text-white')}
                     label={'VIEW MORE'}
                     light
                     onPress={() => alert('clicked')}/>
            </View>

            <View style={css('b-1 rounded-5 mb-2 bg-panel')}>
                <Text style={css('text text-md text-bold p-1')}>
                    {'Card bordered'}
                </Text>
                <Separator/>
                <Image style={css('img img-16-9')}
                       source={{uri: 'https://picsum.photos/321/182'}}/>
                <Text style={css('text p-1')}>
                    {'This is a dummy text.'}
                </Text>
                <Separator/>
                <Btn style={css('m-1 btn-outline-gray-2 align-self-end')}
                     textStyle={css('text')}
                     label={'VIEW MORE'}
                     light
                     onPress={() => alert('clicked')}/>
            </View>

        </View>

    </View>;
}
