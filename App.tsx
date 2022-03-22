import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import LottieView from 'lottie-react-native';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Screen from './src/ScreenRadio';
import { Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

export default function App() {
  
  const [isConnected, setisConnected] = useState(Boolean)

  //@ts-ignore
  useEffect(async () => {
    //@ts-ignore
    await NetInfo.addEventListener(state => {
      if (state.isConnected == true) {
        setisConnected(false)
      } else {
        setisConnected(true)
      }
    });
  }, [isConnected])

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  function Connected() {
    return (
      <View style={{ 
        flex: 1, 
        paddingVertical: '30%',
      }}>
        <LottieView
          autoPlay={true}
          loop={true}
            style={{
              width: 320,
              height: 320,
              alignSelf: 'center'
            }}
            source={require('./assets/lf30_editor_dbyz20bv.json')}
        />

        <View style={{ flex: 1, width: '100%', alignItems: 'center', marginTop: '-15%' }}>
          <Text style={{
            fontSize: 22,
            fontFamily: 'Montserrat_700Bold',
            width: 200,
            textAlign: 'center'
          }}>
            Você está sem conexão!
          </Text>
          <Text style={{ 
            fontSize: 14, 
            fontFamily: 'Montserrat_400Regular', 
            width: '60%',
            marginTop: '5%',
            textAlign: 'center'
          }}>
            Procure se conectar a internet para poder ouvir.
          </Text>
        </View>
      </View>
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <>
    
    {
      isConnected ? <Connected /> : <Screen />
    }
    
    </>
  );
}