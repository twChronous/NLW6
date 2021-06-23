import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function ListHeader({ title, subtitle, ...rest }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}