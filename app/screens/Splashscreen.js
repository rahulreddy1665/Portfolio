import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {GlobalStyles} from '../Styles/Globalstyles';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../constants/constants';

const Splashscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.home);
    }, 2500);
  }, []);

  return (
    <View style={GlobalStyles.SplashContainer}>
      <Lottie
        source={require('../../assets/Portfolio.json')}
        autoPlay
        loop
        style={{width: 400, height: 400}}
      />
    </View>
  );
};

export default Splashscreen;
