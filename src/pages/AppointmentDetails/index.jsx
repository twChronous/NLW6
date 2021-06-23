import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'

import banner from '../../assets/banner.png'
import styles from './styles';

import { Background, Header, ListHeader, Member, ListDivider, ButtonIcon } from '../../components';
import colors from '../../styles/colors';

export default function AppointmentDetails() {
    const members = [
        {
            id: '0',
            username: 'chronous',
            avatar_url: 'https://github.com/twChronous.png',
            status: 'online'
        },
        {
            id: '1',
            username: 'chronous',
            avatar_url: 'https://github.com/twChronous.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton >
                        <Fontisto
                            name="share"
                            size={24}
                            color={colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={banner}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Léndarios
                </Text>
                    <Text style={styles.subtitle}>
                        é hoje que vamos chegar ao challenger sem perder uma partida da md10
                </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title='jogadores'
                subtitle='total 3'
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member
                        avatar={item.avatar_url}
                        username={item.username}
                        status={item.status}
                    />
                )}
                ItemSeparatorComponent={() => (
                    <ListDivider />
                )}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title='Entrar na partida'
                />
            </View>
        </Background>
    )
}