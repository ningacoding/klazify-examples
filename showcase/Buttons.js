import {Text, View} from 'react-native';
import {css, Popover} from 'klazify';
import Btn from '../components/btn';
import {useRef} from 'react';
import PopoverStaticOptions from '../components/popover.static.options';

export default function Buttons() {

    const popoverRef = useRef(null);

    const closePopover = () => {
        if (popoverRef?.current) {
            popoverRef.current.toggleMenu(false);
        }
    }

    return <View>
        <Text style={css('h1')}>
            {'Buttons'}
        </Text>
        <View style={css('flex-wrap row bg-panel pt-1 px-1 rounded-5')}>
            <Btn style={css('mr-1 mb-1 btn-blue')}
                 label={'Blue'}
                 onPress={() => alert('blue')}/>
            <Btn style={css('mr-1 mb-1 btn-indigo')}
                 label={'Indigo'}
                 onPress={() => alert('indigo')}/>
            <Btn style={css('mr-1 mb-1 btn-purple')}
                 label={'Purple'}
                 onPress={() => alert('purple')}/>
            <Btn style={css('mr-1 mb-1 btn-pink')}
                 label={'Pink'}
                 onPress={() => alert('pink')}/>
            <Btn style={css('mr-1 mb-1 btn-red')}
                 label={'Red'}
                 onPress={() => alert('red')}/>
            <Btn style={css('mr-1 mb-1 btn-orange')}
                 label={'Orange'}
                 onPress={() => alert('orange')}/>
            <Btn style={css('mr-1 mb-1 btn-yellow')}
                 label={'Yellow'}
                 onPress={() => alert('yellow')}/>
            <Btn style={css('mr-1 mb-1 btn-green')}
                 label={'Green'}
                 onPress={() => alert('green')}/>
            <Btn style={css('mr-1 mb-1 btn-teal')}
                 label={'Teal'}
                 onPress={() => alert('teal')}/>
            <Btn style={css('mr-1 mb-1 btn-cyan')}
                 label={'Cyan'}
                 onPress={() => alert('cyan')}/>
            <Btn style={css('mr-1 mb-1 btn-gray')}
                 label={'Gray'}
                 onPress={() => alert('gray')}/>
            <Btn style={css('mr-1 mb-1 btn-gray-1')}
                 label={'Gray1'} light
                 onPress={() => alert('gray1')}/>
            <Btn style={css('mr-1 mb-1 btn-gray-2')}
                 label={'Gray2'} light
                 onPress={() => alert('gray2')}/>
            <Btn style={css('mr-1 mb-1 btn-gray-3')}
                 label={'Gray3'}
                 onPress={() => alert('gray3')}/>
            <Btn style={css('mr-1 mb-1 btn-gray-4')}
                 label={'Gray4'}
                 onPress={() => alert('gray4')}/>
            <Btn style={css('mr-1 mb-1 btn-gray-5')}
                 label={'Gray5'}
                 onPress={() => alert('gray5')}/>
            <Btn style={css('mr-1 mb-1 btn-gray-dark')}
                 label={'GrayDark'}
                 onPress={() => alert('gray-dark')}/>
            <Btn style={css('mr-1 mb-1 btn-primary')}
                 label={'Primary'}
                 onPress={() => alert('primary')}/>
            <Btn style={css('mr-1 mb-1 btn-secondary')}
                 label={'Secondary'}
                 onPress={() => alert('secondary')}/>
            <Btn style={css('mr-1 mb-1 btn-success')}
                 label={'Success'}
                 onPress={() => alert('success')}/>
            <Btn style={css('mr-1 mb-1 btn-info')}
                 label={'Info'}
                 onPress={() => alert('info')}/>
            <Btn style={css('mr-1 mb-1 btn-warning')}
                 label={'Warning'}
                 onPress={() => alert('warning')}/>
            <Btn style={css('mr-1 mb-1 btn-danger')}
                 label={'Danger'}
                 onPress={() => alert('danger')}/>
            <Btn style={css('mr-1 mb-1 btn-white')}
                 label={'White'}
                 light
                 onPress={() => alert('white')}/>
            <Btn style={css('mr-1 mb-1 btn-light')}
                 label={'Light'}
                 light
                 onPress={() => alert('light')}/>
            <Btn style={css('mr-1 mb-1 btn-dark')}
                 label={'Dark'}
                 onPress={() => alert('dark')}/>
            <Btn style={css('mr-1 mb-1 btn-black')}
                 label={'Black'}
                 onPress={() => alert('black')}/>
        </View>
        <Text style={css('h1')}>
            {'Buttons Outline'}
        </Text>
        <View style={css('flex-wrap row bg-panel pt-1 px-1 rounded-5')}>
            <Btn style={css('mr-1 mb-1 btn-outline-blue')}
                 textStyle={css('text-blue')}
                 label={'Blue'}
                 onPress={() => alert('blue')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-indigo')}
                 textStyle={css('text-indigo')}
                 label={'Indigo'}
                 onPress={() => alert('indigo')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-purple')}
                 textStyle={css('text-purple')}
                 label={'Purple'}
                 onPress={() => alert('purple')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-pink')}
                 textStyle={css('text-pink')}
                 label={'Pink'}
                 onPress={() => alert('pink')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-red')}
                 textStyle={css('text-red')}
                 label={'Red'}
                 onPress={() => alert('red')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-orange')}
                 textStyle={css('text-orange')}
                 label={'Orange'}
                 onPress={() => alert('orange')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-yellow')}
                 textStyle={css('text-yellow')}
                 label={'Yellow'}
                 onPress={() => alert('yellow')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-green')}
                 textStyle={css('text-green')}
                 label={'Green'}
                 onPress={() => alert('green')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-teal')}
                 textStyle={css('text-teal')}
                 label={'Teal'}
                 onPress={() => alert('teal')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-cyan')}
                 textStyle={css('text-cyan')}
                 label={'Cyan'}
                 onPress={() => alert('cyan')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray')}
                 textStyle={css('text-gray')}
                 label={'Gray'}
                 onPress={() => alert('gray')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray-1')}
                 textStyle={css('text-gray-4')}
                 label={'Gray1'}
                 onPress={() => alert('gray1')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray-2')}
                 textStyle={css('text-gray-4')}
                 label={'Gray2'}
                 onPress={() => alert('gray2')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray-3')}
                 textStyle={css('text-gray-4')}
                 label={'Gray3'}
                 onPress={() => alert('gray3')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray-4')}
                 textStyle={css('text-gray-4')}
                 label={'Gray4'}
                 onPress={() => alert('gray4')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray-5')}
                 textStyle={css('text-gray-5')}
                 label={'Gray5'}
                 onPress={() => alert('gray5')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-gray-dark')}
                 textStyle={css('text-gray-dark')}
                 label={'GrayDark'}
                 onPress={() => alert('gray-dark')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-primary')}
                 textStyle={css('text-primary')}
                 label={'Primary'}
                 onPress={() => alert('primary')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-secondary')}
                 textStyle={css('text-secondary')}
                 label={'Secondary'}
                 onPress={() => alert('secondary')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-success')}
                 textStyle={css('text-success')}
                 label={'Success'}
                 onPress={() => alert('success')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-info')}
                 textStyle={css('text-info')}
                 label={'Info'}
                 onPress={() => alert('info')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-warning')}
                 textStyle={css('text-warning')}
                 label={'Warning'}
                 onPress={() => alert('warning')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-danger')}
                 textStyle={css('text-danger')}
                 label={'Danger'}
                 onPress={() => alert('danger')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-white')}
                 textStyle={css('text-black')}
                 label={'White'}
                 onPress={() => alert('white')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-light')}
                 textStyle={css('text-gray-4')}
                 label={'Light'}
                 onPress={() => alert('light')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-dark')}
                 textStyle={css('text-dark')}
                 label={'Dark'}
                 onPress={() => alert('dark')}/>
            <Btn style={css('mr-1 mb-1 btn-outline-black')}
                 textStyle={css('text-black')}
                 label={'Black'}
                 onPress={() => alert('black')}/>
        </View>
        <Text style={css('h3')}>
            {'Buttons Extra'}
        </Text>
        <View style={css('flex bg-panel pt-1 px-1 rounded-5')}>
            <Btn style={css('mr-1 mb-1 btn-padding')}
                 textStyle={css('link')}
                 label={'Link'}
                 onPress={() => alert('link')}/>
            <Btn style={css('mr-1 mb-1 btn-primary btn-sm')}
                 textStyle={css('text text-white')}
                 label={'Button Small'}
                 onPress={() => alert('btn-sm')}/>
            <Popover ref={popoverRef}
                     inline
                     content={<PopoverStaticOptions onPress={closePopover}/>}>
                <Btn style={css('mb-1 btn-primary')}
                     iconRight={'menu-down'}
                     iconRightStyle={css('text-white')}
                     label={'Button with Menu'}/>
            </Popover>
            <Btn style={css('mr-1 mb-1 btn-primary btn-lg')}
                 textStyle={css('text text-white text-md text-bold')}
                 label={'Button Large'}
                 onPress={() => alert('btn-lg')}/>
            <Btn style={css('mr-1 mb-1 flex btn-primary')}
                 block
                 textStyle={css('text text-white')}
                 label={'BLOCK'}
                 onPress={() => alert('pressed')}/>
        </View>
    </View>;
}
