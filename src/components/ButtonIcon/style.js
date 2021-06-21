import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },
    iconWrapper: {
        width: 50,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: colors.line
    },
    icon: {
        width: 25,
        height: 18
    }
})