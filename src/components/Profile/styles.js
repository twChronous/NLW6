import { StyleSheet } from 'react-native';

import Fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: Fonts.title500,
        fontSize: 24,
        color: colors.heading,
        marginRight: 6
    },
    username: {
        fontFamily: Fonts.title700,
        fontSize: 24,
        color: colors.heading
    },
    message: {
        fontFamily: Fonts.text400,
        color: colors.highlight
    }
})