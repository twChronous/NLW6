import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles';
import colors from '../../styles/colors';

export default function ButonIcon({ ...rest }) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name='plus'
                color={colors.heading}
                size={24}
            />
        </RectButton>
    )
}