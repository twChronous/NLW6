import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../styles/colors';

import styles from './style';

export default function background({children}) {
    return (
        <LinearGradient 
            style={styles.container}
            colors={[colors.secondary80, colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}