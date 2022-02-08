import {color, value} from 'klazify';

export default {
    values: {
        defaultFontFamily: 'Roboto_400Regular',
    },
    extraGlobalVars: {
        '$blue-custom': '#37a1e3',
    },
    customClasses: () => {
        return {
            'primary-lighten-50': {
                backgroundColor: color('$primary').lighten(50).hex(),
            },
            'custom-font': {
                color: () => value('$black'),
                fontFamily: 'PressStart2P_400Regular',
            },
        };
    },
    logs: true,
}
