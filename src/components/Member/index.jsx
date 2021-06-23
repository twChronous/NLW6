import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../styles/colors';
import Avatar from '../Avatar';

import styles from './styles';

export default function Member({ avatar, username, status, ...rest }) {
    const isOnline = status === 'online';

    return (
        <View style={styles.container}>
            <Avatar imageSource={avatar} />

            <View>
                <Text style={styles.title}>
                    {username}
                </Text>

                <View style={styles.status}>
                        <View
                        style={[
                            styles.bulletStatus, 
                            {
                                backgroundColor: isOnline ? colors.on : colors.primary
                            }
                        ]}
                        />

                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>
    )
}