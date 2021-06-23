import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export default function GuildIcon({ guild, ...rest }) {
    const uri = 'https://github.com/twChronous.png'
    return (
        <Image 
        style={styles.container} 
        source={{uri}}
        resizeMode='cover'
        />
    )
}