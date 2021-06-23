import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
export default StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 15,
        marginTop: 15
    },
     check:{
         position: 'absolute',
         top: 8,
         right: 7,
         width: 12,
         height: 12,
         backgroundColor: colors.secondary100,
         borderColor: colors.secondary50,
         borderWidth: 2,
         borderRadius: 3
     },
     checked: {
        position: 'absolute',
        top: 8,
        right: 7,
        width: 10,
        height: 10,
        borderRadius: 3,
        backgroundColor: colors.primary,
     }
})