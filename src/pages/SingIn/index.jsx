import React from 'react';
import {
  Text,
  Image,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';

import styles from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon, Background } from '../../components';

import { useAuth } from '../../hooks/auth';
import colors from '../../styles/colors';

export default function App() {
  const { loading, singIn }  = useAuth();

  async function handleSingIn() {
    try{
        await singIn();
    }catch (error) {
        Alert.alert(error)
    }
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
             jogatinas {'\n'}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
          </Text>
          {
            loading 
            ? <ActivityIndicator color={colors.primary}/>
            : <ButtonIcon title='Entre com discord' onPress={handleSingIn} />
            
            }
        </View>
      </View>
    </Background>
  );
}

