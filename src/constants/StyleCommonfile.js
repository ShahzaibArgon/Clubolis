import {StyleSheet, Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import colors from '../assets/colors/Colors';
import fonts from '../assets/fonts/Fonts';
import strings from './Strings';
import images from '../assets/images/Images';

// export common use file

export const STYLESHEET = StyleSheet;
export const RFVALUE = RFValue;
export const W = w;
export const H = h;
export const COLORS = colors;
export const FONTS = fonts;
export const STRINGS = strings;
export const IMAGES = images;
