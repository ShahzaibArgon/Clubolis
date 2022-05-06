import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { normalize } from "../../Helpers/normalize";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { IMAGES, W, H, FONTS, COLORS, RFVALUE } from '../../constants/StyleCommonfile'

const Login = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={IMAGES.secondBackground}
                resizeMode="cover"
                style={styles.image}>
                <View>
                    <Text style={styles.text}>{"Welcome to Clubolis"}</Text>
                </View>
                <View style={styles.logo}>
                    <Image
                        resizeMode="contain"
                        source={IMAGES.loginLogo}
                    />
                </View>
                <View style={styles.loginView}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("Login2") }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>{"Log In"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotPass}>{"Forgot Password?"}</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate("SignUp") }}
                        style={[styles.button, { marginTop: normalize(35) }]}>
                        <Text style={styles.buttonText}>{"Sign Up"}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: W(100),
        height: H(100),
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: getStatusBarHeight() + normalize(40),
        paddingBottom: normalize(89),
    },
    logo: {
        width: normalize(222),
        height: normalize(51),
        justifyContent: "center"
    },
    text: {
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        fontSize: RFVALUE(20),
        textAlign: "center",
    },
    button: {
        width: "80%",
        height: normalize(46),
        borderRadius: normalize(23),
        backgroundColor: "#EB566B",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        textAlign: "center",
        fontSize: RFVALUE(16),
    },
    forgotPass: {
        fontFamily: FONTS.medium,
        color: COLORS.white,
        textAlign: "center",
        fontSize: RFVALUE(14),
        marginTop: normalize(11),
    },
    loginView: {
        alignItems: "center",
        width: "100%"
    }

});

export default Login;