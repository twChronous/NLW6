import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        fontFamily: fonts.text400,
        color: colors.highlight,
        fontSize: 13,
    }
})