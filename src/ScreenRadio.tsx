import React, { useState, useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { WebView } from 'react-native-webview';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

//@ts-ignore
import ImgRadio from '../assets/LOGO-APP.png';
//@ts-ignore
import ImgChanel from '../assets/Chanel.png';

export default function App() {

  const [ isLiked, setIsLiked ] = useState(true)
  
  const animation = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {

    if (isFirstRun.current) {
      if (isLiked) {
        //@ts-ignore
        animation.current.play(0, 37);
      } else {
        //@ts-ignore
        animation.current.play(37, 0);
      }
      isFirstRun.current = false;
    } else if (isLiked) {
      //@ts-ignore
      animation.current.play(0, 37);
    } else {
      //@ts-ignore
      animation.current.play(37, 0);
    }
    
  }, [isLiked])

  return (
      <View style={styles.container}>

        <View style={{
          width: '100%',
          height: 156,
          backgroundColor: '#ffffff',
          borderRadius: 24,
          padding: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: "#E0E0E2",
          shadowOffset: {
          	width: 0,
          	height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
          <View style={{
            width: 132,
            height: 132,
            borderRadius: 20,
            backgroundColor: '#eeee',
            marginRight: 20
          }}>
            
          </View>

          <View>
            <Text style={{ fontSize: 18, fontFamily: 'Montserrat_700Bold', width: 150 }}>A sua rádio na palma da mão.</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Montserrat_400Regular', width: 130, marginTop: 10 }}>Escute a onde e quando quiser pelo app!</Text>
          </View>

        </View>

        <View style={{
          width: '100%',
          height: '75%',
          backgroundColor: '#ffffff',
          borderRadius: 24,
          padding: 12,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: "#E0E0E2",
          marginTop: '5%',
          shadowOffset: {
          	width: 0,
          	height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>

        <View style={{
          width: 240,
          height: 240,
          backgroundColor: '#000',
          borderRadius: 20,
          marginTop: '5%',
          alignItems: 'center',
          justifyContent: 'center',
          //@ts-ignore
          backgroundColor: '#fff',
          borderWidth: 1.,
          borderColor: '#DDDDDD',
        }}>
          <Image source={ImgRadio} style={{ width: 170, height: 170, alignItems: 'center' }} resizeMode="contain" />
        </View>

          <Image source={ImgChanel} style={{ width: 230, height: 70, alignItems: 'center', marginTop: '5%' }} resizeMode="contain" />

          <TouchableOpacity
          style={{
            width: 90,
            height: 90,
          }}
          onPress={() => {
            setIsLiked(!isLiked)
          }}>
            <LottieView
              autoPlay={false}
              loop={false}
                ref={animation}
                style={{
                  width: 90,
                  height: 90,
                  marginRight: 0
                }}
                source={require('../assets/5857-pause-play.json')}
            />
          </TouchableOpacity>

        </View>

      {
        isLiked ? (
          <View style={{flex: 0}}>
                    <WebView
          style={{flex: 0}}
          source={{ uri: 'https://player.stmsrv.com/multi/8194?app=preview#' }}
        />
          </View>
        ) : null
      }        

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: '10%',
    backgroundColor: '#FAFAFB'
  },
});
