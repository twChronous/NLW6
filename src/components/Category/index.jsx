import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    View,
} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

export default function Category({ title, Icon, checked = false, hasCheckBox = false, ...rest }) {
    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[colors.secondary50, colors.secondary70]}
            >
                <LinearGradient
                    colors={[checked ? colors.secondary85 : colors.secondary50, colors.secondary40]}
                    style={
                        [styles.content, {
                            opacity: checked ? 1 : 0.5
                        }
                        ]}>
                    {
                        hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }
                    <Icon
                        widht={48}
                        height={48}
                    />
                    <Text style={styles.title}>{title}</Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}