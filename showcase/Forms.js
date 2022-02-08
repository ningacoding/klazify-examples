import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {css, Popover} from 'klazify';
import {useRef, useState} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PopoverStaticOptions from '../components/popover.static.options';

export default function Forms() {

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const popoverRef = useRef(null);
    const popoverRef2 = useRef(null);

    const closePopover = () => {
        if (popoverRef2?.current) {
            popoverRef2.current.toggleMenu(false);
        }
        if (popoverRef?.current) {
            popoverRef.current.toggleMenu(false);
        }
    }

    return <View style={css('')}>

        <Text style={css('h1')}>
            {'Forms'}
        </Text>

        <Text style={css('text pb-half')}>
            {'What is your favorite food?'}
        </Text>
        <TextInput style={css(`input rounded-3 bg-white ${isActive1 ? 'input-active' : ''}`)}
                   numberOfLines={1}
                   placeholder={'Type here...'}
                   onFocus={() => setIsActive1(true)}
                   onBlur={() => setIsActive1(false)}/>

        <Text style={css('text pb-half mt-2')}>
            {'Tell us what do you think:'}
        </Text>
        <TextInput style={css(`text-area rounded-3 bg-white ${isActive2 ? 'input-active' : ''}`)}
                   multiline
                   placeholder={'Type here...'}
                   onFocus={() => setIsActive2(true)}
                   onBlur={() => setIsActive2(false)}/>

        <Text style={css('text pb-half mt-2')}>
            {'Input group:'}
        </Text>
        <View style={css('b-1 row center rounded-5')}>
            <MaterialCommunityIcons name={'email-outline'}
                                    style={css('icon text-gray-3 bg-light p-1 rounded-l-5 br-1 mr-1')}/>
            <TextInput style={css(`rounded-3 bg-white flex pr-1`)}
                       numberOfLines={1}
                       placeholder={'Type your email here...'}/>
            <Text style={css('text text-gray-4 bg-light p-1 rounded-r-5 bl-1')}>
                {'@example.com'}
            </Text>
        </View>

        <Text style={css('text pb-half mt-2')}>
            {'Just showing errors example'}
        </Text>
        <TextInput style={css(`input rounded-3 bg-white input-error`)}
                   numberOfLines={1}
                   editable={false}
                   placeholder={'Type here...'}/>
        <Text style={css('text text-danger')}>
            {'The error is still programing with StyleSheet.create()'}
        </Text>

        <View style={css('mt-2')}>
            <Text style={css('text mb-half')}>
                Styling a Dropdown:
            </Text>
            <Popover ref={popoverRef}
                     content={<PopoverStaticOptions onPress={closePopover}/>}>
                <View style={css('row b-1 rounded-3 center')}>
                    <View style={css('flex row p-1')}>
                        <Text style={css('text text-gray-4')}>
                            Please select an item...
                        </Text>
                    </View>
                    <MaterialCommunityIcons name={'chevron-down'}
                                            style={css('icon text-gray-3 p-1')}/>
                </View>
            </Popover>

        </View>

        <View style={css('mt-2')}>
            <Text style={css('text mb-half')}>
                Your imagination is the limit:
            </Text>
            <Popover ref={popoverRef2}
                     content={<PopoverStaticOptions onPress={closePopover}/>}>
                <View style={css('row b-1 rounded-5 center')}>
                    <View style={css('flex row px-1 center')}>
                        <Image style={css('img rounded w-2')}
                               source={{uri: 'https://ui-avatars.com/api/?background=0d6efd&color=fff&name=Klazify'}}/>
                        <Text style={css('text mx-1 flex')}>
                            Klazify
                        </Text>
                        <MaterialCommunityIcons name={'check-circle'}
                                                style={css('icon text-success')}/>
                    </View>
                    <MaterialCommunityIcons name={'chevron-down'}
                                            style={css('icon text-gray-3 rounded-r-5 p-1 bg-primary text-white')}/>
                </View>
            </Popover>
        </View>


        <View style={css('mt-2')}>
            <Text style={css('text mb-half')}>
                Button Group:
            </Text>
            <View style={css('row')}>
                <TouchableOpacity onPress={() => alert('You chosen the best deal')}
                                  style={css('bg-primary p-1 rounded-l-5 flex center')}>
                    <Text style={css('text text-white')}>
                        {'Klazify'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('pressed')}
                                  style={css('by-1 b-primary p-1 flex center')}>
                    <Text style={css('text text-primary')}>
                        {'Option 2'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('pressed')}
                                  style={css('bx-1 by-1 b-primary p-1 rounded-r-5 flex center')}>
                    <Text style={css('text text-primary')}>
                        {'Option 3'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>;

}
