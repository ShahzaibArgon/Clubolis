import { StyleSheet, Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/Colors';
const styles = StyleSheet.create({
    containerFluid: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: h(6),
        ...Platform.select({
         android:{
            bottom: h(7),
         },
         ios:{
            bottom: h(5),
         }
        }),
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlayBtn: {
        backgroundColor: '#000',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-end',
        width: width - 120,
        height: 45,
        marginBottom: 20,
    },

    topImageStyle: {
        width:w(65),
        height:h(58),
        position: 'absolute',
        right: -63,
        ...Platform.select({
            android:{
                top: 10,
            },
            ios:{
                top: 40,
            }
        })

    },
    splashBackImage: {
        width: w(70),
        height: h(70),
        resizeMode: 'contain',
    },
    bottomImageStyle: {
        width:w(60),
        height:h(42),
        position: 'absolute',
        ...Platform.select({
            android:{
                bottom: h(-3),
                marginLeft: h(-8),
            },
            ios:{
                bottom: h(-0),
                marginLeft: h(-8),
            },
        })
    },
    splashBottomImage: {
        height: h(90),
        resizeMode:'contain',
        width: w(90)
    },

});
export default styles;
