import React, { useState, useEffect } from 'react';
import { Animated, View, StatusBar, ImageBackground } from 'react-native';
import styles from './Styles';
import { CommonActions } from '@react-navigation/native';

// import {useDispatch, useSelector} from 'react-redux';
import { BOTTOMTAB, LANDINGSCREEN } from '../../constants/Navigation';
import { COLORS, IMAGES } from '../../constants/StyleCommonfile';
const SplashScreen = props => {
  const [splashBackAnim, setSplashBackAnim] = useState(new Animated.Value(0));
  const [splashOverlayAnim, setSplashOverlayAnim] = useState(
    new Animated.Value(0),
  );

  // const isAuth = useSelector(state => state?.AuthData?.isAuth);

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(splashBackAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(splashOverlayAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]).start(async () => {
        reset(true);
      });
    }, 3000);
  }, []);

  reset = async () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        // routes: [{name: isAuth ? BOTTOMTAB : LANDINGSCREEN}],
      }),
    );
  };
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ImageBackground
        source={IMAGES.istbackgroundLayer}
        style={styles.containerFluid}>
        <View style={styles.topImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.splashBackImage, {opacity: splashBackAnim}]}
            source={IMAGES.splashScreen}
          />
        </View>
        <Animated.View
          style={[
            styles.overlay,
            {
              opacity: splashOverlayAnim,
            },
          ]}>
          {/* <Applogo /> */}
        </Animated.View>
        {/* <View style={styles.bottomImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[styles.splashBottomImage, {opacity: splashBackAnim}]}
            source={images.splashBottom}
          />
        </View> */}
      </ImageBackground>
    </>
  );
};

export default SplashScreen;
