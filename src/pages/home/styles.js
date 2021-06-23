import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import Fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },
    content: {
        marginTop: 46,
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    }
})