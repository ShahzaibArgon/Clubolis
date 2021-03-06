import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { normalize } from "../../Helpers/normalize";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { COLORS, FONTS, H, RFVALUE } from "../../constants/StyleCommonfile";

const SignUp = ({ navigation, route }) => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [lName, setlName] = useState('');
    const [fName, setfName] = useState('');
    const [pNumber, setpNumber] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView
                style={{ justifyContent: "center", alignItems: "center" }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.body}>
                    <View>
                        <Text style={styles.heading}>{"Sign Up"}</Text>
                        <Text style={styles.text}>{"Create a new account here"}</Text>
                    </View>
                    <View style={styles.loginView}>
                        <TextInput
                            mode="outlined"
                            outlineColor={COLORS.darkWhite}
                            style={styles.input}
                            // label="Email or Username"
                            placeholder="First Name"
                            placeholderTextColor={"white"}
                            value={fName}
                            theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(12) }}
                            onChangeText={text => setfName(text)}
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor={COLORS.darkWhite}
                            style={styles.input}
                            // label="Email or Username"
                            placeholder="Last Name"
                            placeholderTextColor={"white"}
                            value={lName}
                            theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(12) }}
                            onChangeText={text => setlName(text)}
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor={COLORS.darkWhite}
                            style={styles.input}
                            // label="Email or Username"
                            placeholder="Create Username"
                            placeholderTextColor={"white"}
                            value={text}
                            theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(12) }}
                            onChangeText={text => setText(text)}
                        />
                        <TextInput
                            keyboardType="number-pad"
                            mode="outlined"
                            outlineColor={COLORS.darkWhite}
                            style={styles.input}
                            placeholder="Phone Number"
                            placeholderTextColor={"white"}
                            value={pNumber}
                            theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(12) }}
                            onChangeText={text => setpNumber(text)}
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor={COLORS.darkWhite}
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor={"white"}
                            secureTextEntry={showPassword}
                            theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(12) }}
                            onChangeText={(password) => { setPassword(password) }}
                            right={<TextInput.Icon onPress={() => setShowPassword(prev => !prev)} name={showPassword ? "eye-off" : "eye"} color={"white"} />}
                        />
                        <TextInput
                            mode="outlined"
                            outlineColor={COLORS.darkWhite}
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor={"white"}
                            secureTextEntry={showPassword}
                            theme={{ colors: { text: 'white', primary: 'white' }, roundness: normalize(12) }}
                            onChangeText={(cpassword) => { setcPassword(cpassword) }}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>navigation.navigate('OtpVerification')}
                        >
                            <Text style={styles.buttonText}>{"Sign Up"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signUp}>
                        <TouchableOpacity disabled={true}>
                            <Text style={styles.tagLine}>{"have an account?"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Login2")}>
                            <Text style={styles.signUpText}>{" Log In"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.signUp}>
                            <Text style={styles.termsText}>{"By signing up, you agree with the"}</Text>
                            <Text style={[styles.termsText, { color: "#1F62AA", fontSize: normalize(11) }]}>{" Terms of Service"}</Text>
                        </View>
                        <View style={[styles.signUp, { marginTop: normalize(2) }]}>
                            <Text style={styles.termsText}>{"and"}</Text>
                            <Text style={[styles.termsText, { color: "#1F62AA", fontSize: normalize(11) }]}>{" Privacy Policy"}</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#24005E",
    },
    body: {
        flex: 1,
        width: "100%",
        backgroundColor: "#24005E",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: getStatusBarHeight() + normalize(30),
    },
    termsText: {
        fontFamily: FONTS.medium,
        color: COLORS.darkWhite,
        fontSize: RFVALUE(10),
        textAlign: "center",
        lineHeight: 15
    },
    heading: {
        fontFamily: FONTS.Bold,
        color: COLORS.secondary,
        fontSize: normalize(35),
        textAlign: "center",
        lineHeight: 52.5
    },
    tagLine: {
        fontFamily: "Poppins-Light",
        color: "#FFFFFF",
        fontSize: normalize(14),
        fontWeight: "500",
        textAlign: "center",
        lineHeight: 21
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
        fontFamily: "Poppins-Light",
        color: COLORS.white,
        fontSize: RFVALUE(13),
        textAlign: "center",
        lineHeight: 19.5
    },
    button: {
        width: "80%",
        marginTop: normalize(24),
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
        fontSize: normalize(16),
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
        color: COLORS.darkWhite,
        borderRadius: normalize(10),
        // overflow:"hidden",
        width: "85%",
        backgroundColor: '#24005E',
        marginTop: H(2),
        height: normalize(46),
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
        marginTop: normalize(20),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center'
    }

});

export default SignUp;