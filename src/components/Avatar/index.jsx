import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import colors from '../../styles/colors';

export default function Avatar({ imageSource }) {
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.secondary50, colors.secondary70]}
        >
            <Image
                source={{ uri: imageSource }}
                style={styles.image}
            />
        </LinearGradient>
    )
}