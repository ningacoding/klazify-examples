import {color, value} from 'klazify';
import defaultClasses from './klazify/classes';

export default {
  values: {
    defaultFontFamily: 'Roboto_400Regular',
  },
  extraGlobalVars: {
    '$blue-custom': '#37a1e3',
  },
  // customClasses: defaultClasses,
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
  // logs: true,
}
