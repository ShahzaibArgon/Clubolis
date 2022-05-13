import React, { useState, } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView
} from "react-native";
import { normalize } from "../../Helpers/normalize";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TextInput } from 'react-native-paper';
import { COLORS, FONTS, RFVALUE } from "../../constants/StyleCommonfile";
import { BOTTOMTAB } from "../../constants/Navigation";
const Login2 = ({ navigation, route }) => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView
                    style={{ justifyContent: "center", alignItems: "center" }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={styles.body}>
                        <View>
                            <Text style={styles.heading}>{"Login"}</Text>
                            <Text style={styles.text}>{"Log in to your account here"}</Text>
                        </View>
                        <View style={styles.loginView}>
                            <TextInput
                                mode="outlined"
                                outlineColor={COLORS.darkWhite}
                                style={styles.input}
                                placeholder="Email or Username"
                                placeholderTextColor={"white"}
                                value={text}
                                theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(9) }}
                                onChangeText={text => setText(text)}
                            />
                            <TextInput
                                mode="outlined"
                                outlineColor={COLORS.darkWhite}
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor={"white"}
                                secureTextEntry={showPassword}
                                theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(9) }}
                                onChangeText={(password) => { setPassword(password) }}
                                right={<TextInput.Icon onPress={() => setShowPassword(prev => !prev)} name={showPassword ? "eye-off" : "eye"} color={"white"} />}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate(BOTTOMTAB)}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>{"Log In"}</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.tagLine, { marginVertical: normalize(30) }]}>{"Or connect using"}</Text>
                        <View style={styles.socialLogins}>
                            <TouchableOpacity
                                style={styles.googleLoginBtn}>
                                <AntDesign name="google" size={normalize(30)} color="white" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.facebookLoginBtn}>
                                <MaterialCommunityIcons name="facebook" size={normalize(32)} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signUp}>
                            <TouchableOpacity disabled={true}>
                                <Text style={styles.tagLine}>{"Don't have an account?"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text onPress={() => navigation.navigate("SignUp")} style={styles.signUpText}>{" Sign Up"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: normalize(15) }}>
                            <View style={styles.signUp}>
                                <Text style={styles.termsText}>{"By signing up, you agree with the"}</Text>
                                <Text style={[styles.termsText, { color: "#1F62AA", fontSize: normalize(11) }]}>{" Terms of Service"}</Text>
                            </View>
                            <View style={[styles.signUp, { marginTop: normalize(3) }]}>
                                <Text style={styles.termsText}>{"and"}</Text>
                                <Text style={[styles.termsText, { color: "#1F62AA", fontSize: normalize(11) }]}>{" Privacy Policy"}</Text>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#24005E",
    },
    body: {
        flex: 1,
        backgroundColor: "#24005E",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: getStatusBarHeight() + normalize(30),
    },
    termsText: {
        fontFamily: FONTS.Bold,
        color: COLORS.darkWhite,
        fontSize: RFVALUE(10),
        textAlign: "center",
        lineHeight: 15
    },
    heading: {
        fontFamily: FONTS.Bold,
        color: COLORS.secondary,
        fontSize: RFVALUE(35),
        textAlign: "center",
    },
    tagLine: {
        fontFamily: FONTS.medium,
        color: COLORS.darkWhite,
        fontSize: RFVALUE(14),
        textAlign: "center",
    },
    signUpText: {
        fontFamily: FONTS.Bold,
        color: COLORS.secondary,
        fontSize: RFVALUE(14),
        textAlign: "center",
    },
    loginView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        marginTop: normalize(32),
        fontFamily: FONTS.Regular,
        color: COLORS.white,
        fontSize: RFVALUE(13),
        textAlign: "center",
    },
    button: {
        width: "80%",
        marginTop: normalize(74),
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
        fontFamily: "Poppins",
        color: "white",
        textAlign: "center",
        fontSize: normalize(14),
        fontWeight: "500",
        lineHeight: 21,
        marginTop: normalize(11),
    },
    input: {
        color: "white",
        // borderWidth:2,
        // borderRadius: 9,
        overflow: "hidden",
        width: "85%",
        backgroundColor: '#24005E',
        marginTop: normalize(27),
        height: normalize(40),
    },
    socialLogins: {
        flexDirection: "row",
        // marginTop:normalize(50),
    },
    googleLoginBtn: {
        height: normalize(40),
        justifyContent: "center",
        alignItems: "center",
        width: normalize(40),
        borderRadius: normalize(100),
        marginBottom: normalize(12),
        backgroundColor: "transparent"
    },
    facebookLoginBtn: {
        height: normalize(40),
        justifyContent: "center",
        alignItems: "center",
        width: normalize(40),
        borderRadius: normalize(100),
        marginBottom: normalize(12),
        marginLeft: normalize(20),
        backgroundColor: "transparent"

    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: normalize(25),
    }

});

export default Login2;