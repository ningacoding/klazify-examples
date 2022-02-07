import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {css} from 'klazify';
import {useRef, useState} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Menu} from 'react-native-material-menu';

export default function Forms() {

    const menuRef = useRef(null);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [buttonWidth, setButtonWidth] = useState(undefined);

    const onButtonLayout = ({nativeEvent}) => setButtonWidth(nativeEvent.layout.width);

    const toggleMenu = (show) => {
        const currentMenuRef = menuRef.current;
        if (!!currentMenuRef) {
            if (!!show) {
                currentMenuRef.show();
            } else {
                currentMenuRef.hide();
            }
        }
    };

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
            <View style={css('row b-1 rounded-3 center')}>
                <View style={css('flex row p-1')}>
                    <Text style={css('text')}>
                        México
                    </Text>
                </View>
                <MaterialCommunityIcons name={'chevron-down'}
                                        style={css('icon text-gray-3 p-1')}/>
            </View>
        </View>

        <View style={css('mt-2')}
              onLayout={onButtonLayout}>

            <Text style={css('text mb-half')}>
                Your imagination is the limit:
            </Text>

            <TouchableOpacity style={css('row b-1 rounded-5 center')}
                              onPress={() => toggleMenu(true)}>
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
                                        style={css('icon text-gray-3 rounded-right-5 p-1 bg-primary text-white')}/>
            </TouchableOpacity>

            {/*Dropdown options menu*/}
            <View style={css('position-absolute bottom-0 left-0')}>
                <Menu ref={menuRef}
                      style={[css('rounded-5'), css({width: buttonWidth})]}>
                    <View>
                        <TouchableOpacity style={css('row center p-1')}
                                          onPress={() => toggleMenu()}>
                            <MaterialCommunityIcons name={'checkbox-blank-circle-outline'}
                                                    style={css('icon text-primary mr-1')}/>
                            <Text style={css('text flex')}>
                                {'Option 1'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css('row center p-1')}
                                          onPress={() => toggleMenu()}>
                            <MaterialCommunityIcons name={'checkbox-blank-circle-outline'}
                                                    style={css('icon text-primary mr-1')}/>
                            <Text style={css('text flex')}>
                                {'Option 2'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css('row center p-1')}
                                          onPress={() => toggleMenu()}>
                            <MaterialCommunityIcons name={'checkbox-blank-circle'}
                                                    style={css('icon text-primary mr-1')}/>
                            <Text style={css('text flex')}>
                                {'Klazify'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css('row center p-1')}
                                          onPress={() => toggleMenu()}>
                            <MaterialCommunityIcons name={'checkbox-blank-circle-outline'}
                                                    style={css('icon text-primary mr-1')}/>
                            <Text style={css('text flex')}>
                                {'Option 4'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Menu>
            </View>
        </View>

    </View>;

}
