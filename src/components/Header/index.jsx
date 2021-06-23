import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import colors from '../../styles/colors';

export default function Header({ title, action, ...rest }) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack()
    }
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.secondary100, colors.secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={colors.heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {
                action &&
                <View>
                    {action}
                </View>
            }
        </LinearGradient>
    )
}