import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -100,
        paddingHorizontal: 50
    },
    title: {
        color: colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: -40
    },
    subtitle: {
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30
    }
})