import React, { useState, useEffect, useRef } from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    Platform,
    View,
    TouchableOpacity,
    Pressable,
    ImageBackground,
    Text
} from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Modal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import images from '../assets/images/Images'
import Home from '../screen/Home/Home';
import BussinessForum from '../screen/BussinessFroum/BussinessForum';
import Event from '../screen/Event/Event';
import Profile from '../screen/Profile/Profile';
import Login from '../screen/Login/Login';
import { COLORS, FONTS, H, IMAGES, STRINGS, W } from '../constants/StyleCommonfile';
import colors from '../assets/colors/Colors';
import ActivityScreen from '../screen/ActivityScreen/ActivityScreen';

const { height, width } = Dimensions.get('window');

const BottomNavigator = props => {
    const [isMediaOptionsModal, setMediaOptionsModal] = useState(false);

    const _handleServe = () => {
        setMediaOptionsModal(false);
        props.navigation.navigate(JOBPOST);
    };
    const checkAuth = () => {
        setMediaOptionsModal(true);
    };

    const _handleShare = () => {
        setMediaOptionsModal(false);
        setTimeout(() => {
            props.navigation.navigate(SHAREPOST);
        }, 700);
    };

    const Tab = createBottomTabNavigator();
    const screenOptions = {
        tabBarHideOnKeyboard: Platform.OS == 'ios' ? false : true,
        tabBarStyle: {
            height: H(9),
            elevation: 0,
            shadowColor: 'transparent',
            backgroundColor: COLORS.secondary,
            borderWidth: 0,
            borderTopColor: COLORS.secondary,
        },
        headerShown: false,
        tabBarShowLabel: false,
    };
    return (
        <>
            <Tab.Navigator
                screenOptions={screenOptions}
                initialRouteName={'Home'}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.icon}>
                                {focused ? (
                                    <Image
                                        style={styles.IconStyle}
                                        source={images.homeIcon}
                                        resizeMode={'contain'}
                                    />
                                ) : (
                                    <Image
                                        style={styles.IconStyle}
                                        source={images.homeIcon}
                                    />
                                )}
                            </View>
                        ),
                    }}></Tab.Screen>

                <Tab.Screen
                    name="Explore"
                    component={ActivityScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.icon}>
                                {focused ? (
                                    <Image
                                        style={styles.IconStyle}
                                        source={images.bussinessFroum}
                                    />
                                ) : (
                                    <Image
                                        source={images.bussinessFroum}
                                        style={styles.IconStyle}
                                    />
                                )}
                            </View>
                        ),
                    }}></Tab.Screen>
                <Tab.Screen
                    name="Postt"
                    component={Login}
                    remove
                    this
                    after
                    Screen
                    listeners={{
                        tabPress: e => {
                            e.preventDefault();
                        },
                    }}
                    options={{
                        tabBarIconStyle: { display: 'none' },
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.postIcon}>
                                {focused ? (
                                    <Image
                                        style={styles.IconStyle}
                                        source={images.centerButton}
                                    />
                                ) : (
                                    <Image
                                        style={[styles.IconStyle]}
                                        source={images.centerButton}
                                    />
                                )}
                            </View>
                        ),
                    }}></Tab.Screen>

                <Tab.Screen
                    name="chat"
                    component={Event}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.icon}>
                                {focused ? (
                                    <Image
                                        source={images.eventIcon}
                                        style={styles.IconStyle}
                                    />
                                ) : (
                                    <Image
                                        source={images.eventIcon}
                                        style={styles.IconStyle}
                                    />
                                )}
                            </View>
                        ),
                    }}></Tab.Screen>
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={styles.icon}>
                                {focused ? (
                                    <Image
                                        source={images.profileIcon}
                                        style={styles.IconStyle}
                                    />
                                ) : (
                                    <Image
                                        source={images.profileIcon}
                                        style={styles.IconStyle}
                                    />
                                )}
                            </View>
                        ),
                    }}></Tab.Screen>
            </Tab.Navigator>

            <Pressable onPress={() => checkAuth()} style={styles.floatingBtn}>
                <Image
                    style={[styles.inActiveIconStyle, { height: w(15) }]}
                    source={images.centerButton}
                />
            </Pressable>

            <Modal
                isVisible={isMediaOptionsModal}
                animationInTiming={20}
                animationOutTiming={20}
                backdropOpacity={0.1}
                style={styles.postOptionsModal}
                onBackdropPress={() => setMediaOptionsModal(false)}
                useNativeDriver={true}
                onBackButtonPress={() => setMediaOptionsModal(false)}>
                <ImageBackground
                    source={IMAGES.bottomTabSaqurebackgroundImage}
                    style={styles.btnsContainer}>
                    <TouchableOpacity
                        onPress={() => _handleServe()}
                        style={styles.optionIconContainer}>
                        <Image
                            style={styles.floatingButtonStyle}
                            source={images.addPhoto} />
                        <Text style={styles.btnTextStyle}>{STRINGS.AddPhotoCaption}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => _handleShare()}
                        disabled={!isMediaOptionsModal}
                        style={styles.optionIconContainer}>
                        <Image
                            style={styles.floatingButtonStyle}
                            source={images.addBussiness} />
                        <Text style={styles.btnTextStyle}>{STRINGS.AddBusiness}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => _handleShare()}
                        disabled={!isMediaOptionsModal}
                        style={styles.eventIconStyle}>
                        <Image
                            style={styles.floatingButtonStyle}
                            source={images.addEventRed} />
                        <Text style={styles.btnTextStyle}>{STRINGS.AddEvent}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </Modal>
        </>
    );
};
export default BottomNavigator;

const styles = StyleSheet.create({
    icon: {
        // height: Platform.OS == 'ios' ? height / 25 : height / 25,
        // width: Platform.OS == 'ios' ? height / 25 : height / 25,
        // borderRadius: Platform.OS == 'ios' ? height / 50 : height / 50,
        // marginTop: Platform.OS == 'ios' ? 78 : 25,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    postIcon: {
        height: Platform.OS == 'ios' ? height / 10 : height / 12,
        width: Platform.OS == 'ios' ? height / 10 : height / 12,
        marginTop: Platform.OS == 'ios' ? height / 10 : height / 38,
        alignItems: 'center',
    },
    activeProfile: {
        borderWidth: 2,
        height: Platform.OS == 'ios' ? height / 23 : height / 23,
        width: Platform.OS == 'ios' ? height / 23 : height / 23,
        borderColor: '#aada',
        borderRadius: Platform.OS == 'ios' ? height / 46 : height / 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inActiveProfile: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatingBtn: {
        position: 'absolute',
        bottom: 40,
        ...Platform.select({
            android: {
                bottom: h(6),
            },
            ios: {
                bottom: h(5),
            },
        }),

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    postOptionsContainer: {
        flex: 1,
    },
    postOptionsModal: {
        padding: 0,
        margin: 0,
        justifyContent: 'flex-end',
        paddingBottom: height / 14 + 10,
        height: H('90%'),
        width: W('100%'),
        zIndex: 9999,
    },
    btnsContainer: {
        height: H(32),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        opacity: 0.9,
        bottom: 3,
        resizeMode: 'contain',
        overflow: 'hidden'
    },
    optionIconContainer: {
        height: Platform.OS == 'ios' ? height / 2.2 : height / 12,
        width: Platform.OS == 'ios' ? height / 14 : height / 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Platform.OS == 'ios' ? height / 28 : height / 24,
    },
    videoRecordingBtn: {
        alignSelf: 'center',
    },
    IconStyle: {
        width: w(25),
        height: h(3.2),
        resizeMode: 'contain',
    },
    inActiveIconStyle: {
        width: w(25),
        height: h(2.5),
        resizeMode: 'contain',
    },
    floatingButtonStyle: {
        width: w(8),
        height: w(8),
        resizeMode: 'contain',
    },
    btnTextStyle: {
        color: COLORS.white,
        width: W(30),
        textAlign: 'center',
        fontSize: RFValue(7),
        fontFamily: FONTS.Bold,
        marginTop: H(0.5)
    },
    eventIconStyle:{
        alignItems:'center',
        backgroundColor:'#ada',
        position:'absolute',
        left:0,
        right:0,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:W(20),
        alignSelf:'center'
    }
});
