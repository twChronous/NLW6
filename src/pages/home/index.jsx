import React, { useState } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import styles from './styles';

import {
  Profile,
  ButtonAdd,
  CategorySelect,
  ListHeader,
  Appointment,
  ListDivider,
  Background
} from '../../components';

export default function App() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();
  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(data) {
    navigation.navigate('AppointmentDetails', data)
  }
  function handleAppointmentCreate(data) {
    navigation.navigate('AppointmentCreate', data)
  }
  const appointments = [
    {
      id: 1,
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 54:90',
      description: 'é hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: 2,
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true
      },
      category: '2',
      date: '22/06 as 54:90',
      description: 'é hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]
  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title='Partidas Agendadas' subtitle='Total 6' />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Appointment
              guild={item.guild}
              category={item.category}
              description={item.description}
              date={item.date}
              onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => (
            <ListDivider />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  )
}