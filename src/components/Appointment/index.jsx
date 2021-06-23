import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import categories from '../../utils/categories';
import GuildIcon from '../GuildIcon'
import PlayerSvg from '../../assets/player.svg';
import Calendar from '../../assets/calendar.svg';

import styles from './styles';
import colors from '../../styles/colors';

export default function Appointment({ guild, category, description, date, ...rest }) {
    const [Category] = categories.filter(item => item.id === category);

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {Category.title}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <Calendar />
                            <Text style={styles.date}>
                                {date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={
                                guild.owner ? colors.primary : colors.on
                            } />
                            <Text style={[
                                styles.player,
                                {
                                    color: guild.owner ? colors.primary : colors.on
                                }
                            ]}>
                                {guild.owner ? 'anfirião' : 'visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}