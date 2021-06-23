import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export default function Divider({...rest}) {
    return (
        <TextInput 
        style={styles.container} 
        keyboardType='numeric'
        {...rest}
        />
    )
}