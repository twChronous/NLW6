import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import {
    ModalView,
    Header,
    CategorySelect,
    GuildIcon,
    SmallInput,
    TextArea,
    Button,
} from '../../components';

import Guilds from '../Guilds'
import colors from '../../styles/colors';

export default function AppointmentDetails() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState([]);


    function handleOpenGuilds() {
        setOpenGuildsModal(true)
    }
    function handleGuildSelect(guildSelect) {
        setGuild(guildSelect)
        setOpenGuildsModal(false)
    }
    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                    <Header
                        title='Agendar Partida'
                    />
                    <Text style={[
                        styles.label,
                        {
                            marginLeft: 24,
                            marginTop: 36,
                            marginBottom: 18
                        }
                    ]}>
                        Categoria
            </Text>
                    <CategorySelect
                        hasCheckBox
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon
                                    ? <GuildIcon /> 
                                    : <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                       { guild ? guild.name : 'Selecione um servidor' }
                            </Text>
                                </View>
                                <Feather
                                    name='chevron-right'
                                    size={18}
                                    color={colors.heading}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>
                                    Dia e Mes
                        </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLenght={2} />
                                    <Text style={styles.divider}>
                                        /
                        </Text>
                                    <SmallInput maxLenght={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>
                                    Hora e Minuto
                        </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLenght={2} />
                                    <Text style={styles.divider}>
                                        :
                        </Text>
                                    <SmallInput maxLenght={2} />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                    </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100Caracteres
                    </Text>
                        </View>
                        <TextArea
                            multiline
                            maxLenght={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}> 
                            <Button title='agendar'/>
                        </View>
                    </View>
            </ScrollView>
            <ModalView visible={openGuildsModal}>
                <Guilds handleGuildSelected={handleGuildSelect}/>
            </ModalView>
        </KeyboardAvoidingView>
    )
}