import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default function Divider({ isCenter = false }) {
    return (
        <View
            style={
                [
                    styles.container,
                    isCenter ? {
                        marginVertical: 12
                    } : {
                        marginTop: 2,
                        marginBottom: 31
                    }
            ]
            }
        />
    )
}