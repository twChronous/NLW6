import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
    },
    overlay: {
        flex:1,
        backgroundColor: colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    }
})