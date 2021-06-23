import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import {
    Text,
    View,
} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

export default function Category({ title, Icon, checked, ...rest }) {
    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[colors.secondary50, colors.secondary70]}
            >
                <View style={
                    [styles.container, {
                        opacity: checked ? 1 : 0.4
                    }
                    ]}>
                    <View style={checked ? styles.checked : styles.check} />
                    
                        <Icon
                            widht={48}
                            height={48}
                        />
                    <Text style={styles.title}>{title}</Text>
                </View>
            </LinearGradient>
        </RectButton>
    )
}