import {color, value} from 'klazify';
import Color from 'color';

export default {
    values: {
        theme: 'custom',
        defaultFontFamily: 'Roboto_400Regular',

        blue: Color('#0d6efd').darken(0.5).hex(),
        indigo: Color('#6610f2').darken(0.5).hex(),
        purple: Color('#6f42c1').darken(0.5).hex(),
        pink: Color('#d63384').darken(0.5).hex(),
        red: Color('#dc3545').darken(0.5).hex(),
        orange: Color('#fd7e14').darken(0.5).hex(),
        yellow: Color('#ffc107').darken(0.5).hex(),
        green: Color('#198754').darken(0.3).hex(),
        teal: Color('#20c997').darken(0.3).hex(),
        cyan: Color('#0dcaf0').darken(0.3).hex(),
        gray: Color('#6c757d').darken(0.3).hex(),
        gray1: Color('#212529').lighten(0.16).hex(),
        gray2: Color('#212529').lighten(0.24).hex(),
        gray3: Color('#212529').lighten(0.32).hex(),
        gray4: Color('#212529').lighten(0.64).hex(),
        gray5: Color('#212529').lighten(0.96).hex(),
        grayDark: Color('#343a40').darken(0.3).hex(),
        primary: Color('#0d6efd').darken(0.5).hex(),
        secondary: Color('#6c757d').darken(0.3).hex(),
        success: Color('#198754').darken(0.3).hex(),
        info: Color('#0dcaf0').darken(0.5).hex(),
        warning: Color('#ffc107').darken(0.5).hex(),
        danger: Color('#dc3545').darken(0.5).hex(),
        white: '#fff',
        light: '#f8f9fa',
        dark: '#212529',
        black: '#000',

        text: '#FFF',
        textLight: '#212529',
        bgBody: Color('#f8f9fa').darken(0.9).hex(),

        btnPaddingHorizontal: '1rem',
        btnPaddingVertical: '0.75rem',
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
};
