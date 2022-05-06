import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import CustomeButton from "../../components/CustomeButton/CustomeButton";
import Header from "../../components/Header/Header";
import { COLORS, H, IMAGES, STRINGS, W } from "../../constants/StyleCommonfile";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Styles';
import OTPInputView from '@twotalltotems/react-native-otp-input'
const OtpEmailVerification = () => {
    const [code, setCode] = useState('');
    const [clearOTP, setClearOTP] = useState(false);
    const OTPRef = useRef(null)

    return (
        <SafeAreaView
            style={styles.continer}>
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
                <Header
                    imageName={IMAGES.bacKarrow}
                    isHomeScreen={false}
                />
                <Image
                    resizeMode={'contain'}
                    source={IMAGES.emailVerification}
                    style={styles.otpSendImageStyle}
                />
                <Text style={styles.otpVerificationTextStyle}>{STRINGS.otpVerifcation}</Text>
                <View style={styles.textContiner}>
                    <Text style={styles.secondDesciptionTextStyle}>{STRINGS.enter4digit}</Text>
                </View>
                <Text style={[styles.secondDesciptionTextStyle, { textDecorationLine: 'underline' }]}>{'test@gmail.com'}</Text>
                <View style={{height:H(5)}}/>
                <View style={styles.OtpCodeContiner}>
                    <OTPInputView
                        style={{ width: W('82%'), height: H(8), }}
                        pinCount={4}
                        selectionColor="#AC55A1"
                        ref={OTPRef}
                        pinCount={4}
                        clearInputs={clearOTP}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        
                        onCodeFilled={(code) => {
                            setClearOTP(false)
                            setCode(code);
                        }}
                    />
                </View>
                <View style={{height:H(5)}}/>
                <View style={styles.haveNotContiner}>
                    <TouchableOpacity disabled={true}>
                        <Text style={styles.haveNotrecovedTextStyle}>{STRINGS.haveNotReciviedCode}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.resendCodeTextStyle}> {STRINGS.resendVCode}</Text>
                    </TouchableOpacity>
                </View>
                <CustomeButton
                    onPress={() => alert()}
                    btnText={STRINGS.verifyProceed} />
                <Text style={styles.termTextStyle}>{STRINGS.termsPrivacy}</Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default OtpEmailVerification