import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default StyleSheet.create({
    banner: {
        width: '100%',
        height: 180, 
        marginBottom: 30     
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontSize: 28,
        fontFamily: Fonts.title700,
        color: colors.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: Fonts.text400,
        color: colors.heading
    }, 
    members: {
        marginLeft: 24,
        marginTop: 27
    }, 
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace() 
    }
})