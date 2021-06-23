import React from 'react';

import {RectButton} from 'react-native-gesture-handler';

import {
    Text,
} from 'react-native';

import styles from './style';

export default function Buton({ title, ...rest }) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}