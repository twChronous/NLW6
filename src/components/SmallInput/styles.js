import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: colors.secondary40,
        color: colors.heading,
        borderRadius: 8,
        fontFamily: fonts.text400,
        marginRight: 4,
        textAlign: 'center',
        borderColor: colors.secondary50,
        borderWidth: 1
    }
})