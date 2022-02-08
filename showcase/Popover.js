import {Image, Text, View} from 'react-native';
import {css, Popover} from 'klazify';
import Btn from '../components/btn';
import {useRef} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function PopoverExample() {
    const popoverRef = useRef(null);

    const closePopover = () => {
        if (popoverRef?.current) {
            popoverRef.current.toggleMenu(false);
        }
    }
    return <View style={css('')}>
        <Text style={css('h1')}>
            {'Popover'}
        </Text>
        <Text style={css('text mb-1')}>
            {'Klazify provides a simple Popover that can renders anything inside, specially designed for dropdowns and menus with some options.'}
        </Text>

        <Popover ref={popoverRef}
                 content={<View style={css('p-1')}>
                     <Text style={css('h3')}>
                         {'Popover content'}
                     </Text>
                     <Image source={{uri: 'https://picsum.photos/319/180'}}
                            style={css('img-16-9')}/>
                     <Btn style={css('btn-primary align-self-end mt-1')}
                          textStyle={css('text text-white')}
                          onPress={closePopover}
                          iconRight={'close'}
                          iconRightStyle={css('text-white')}
                          label={'CLOSE'}/>
                 </View>}>
            <Btn style={css('btn-primary')}
                 label={'Press me to show Popover'}/>
        </Popover>

        <View style={css('row center alert-warning p-1 rounded-3 mt-1')}>
            <MaterialCommunityIcons name={'alert'}
                                    style={css('icon icon-md text-warning center mr-1')}/>
            <Text style={css('flex text text-alert-warning center')}>
                {'You shouldn\'t render large views inside Popover.'}
            </Text>
        </View>

    </View>;
}
