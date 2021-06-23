import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.title700,
        fontSize: 20,
        color: colors.heading
    }
})