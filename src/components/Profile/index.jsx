import React from 'react';

import {
    View,
    Text
} from 'react-native';

import styles from './styles';
import Avatar  from '../Avatar';

export default function background() {
    return (
        <View style={styles.container}>
            <Avatar imageSource='https://github.com/twChronous.png'/>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                </Text>
                    <Text style={styles.username}>
                        Chronous
                </Text>
                </View>
                <Text style={styles.message}>
                        hoje é dia de vitoria
                </Text>
            </View>
        </View>
    )
}