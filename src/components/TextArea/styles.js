import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: colors.secondary40,
        color: colors.heading,
        borderRadius: 8,
        fontFamily: fonts.text400,
        marginRight: 4,     
        borderColor: colors.secondary50,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        textAlignVertical: 'top'
    }
})