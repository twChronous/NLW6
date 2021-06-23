import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, ListDivider } from '../../components';
import styles from './styles';

export default function GuildIcon({ handleGuildSelected, ...rest }) {

    const guilds = [
        {
            id: '0',
            name: 'Lendarios',
            icon: null,
            owner: true
        },
        {
            id: '1',
            name: 'Lendarios',
            icon: null,
            owner: true
        }
    ]
    return (
        <View>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        name={item.name}
                        icon={item.icon}
                        owner={item.owner}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
            />
        </View>
    )
}