import React,{useState} from "react";
import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import CustomeButton from "../../components/CustomeButton/CustomeButton";
import Header from "../../components/Header/Header";
import { COLORS, H, IMAGES, STRINGS } from "../../constants/StyleCommonfile";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Styles'
import { OTPEMAILVERIFICATION, OTPMOBILEVERIIFCATION } from "../../constants/Navigation";
const OtpVerification = (props) => {
  const [enterMobileOrNo ,setEnterMobileOrNo] = useState('')


   const getOtp = () =>{
     if(enterMobileOrNo.includes === '@'){
      props.navigation.navigate(OTPEMAILVERIFICATION)
     }
     else{
         props.navigation.navigate(OTPMOBILEVERIIFCATION)
     }
   }


    return (
        <SafeAreaView
            style={styles.continer}>
            <KeyboardAwareScrollView
                automaticallyAdjustContentInsets={false}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <Header
                    imageName={IMAGES.bacKarrow}
                    isHomeScreen={false}
                />
                <Image
                    resizeMode={'contain'}
                    source={IMAGES.sendOtp}
                    style={styles.otpSendImageStyle}
                />
                <Text style={styles.otpVerificationTextStyle}>{STRINGS.otpVerifcation}</Text>
                <View style={styles.textContiner}>
                    <Text style={styles.secondDesciptionTextStyle}>{STRINGS.otpDesciption}</Text>
                    <Text style={styles.boldTextStyle}>{STRINGS.otpDesciptionBold}</Text>
                    <Text style={styles.secondDesciptionTextStyle}> {STRINGS.otpDesciptionend}</Text>
                </View>
                <Text style={styles.secondDesciptionTextStyle}>{STRINGS.otpDescriptionSecondPart}</Text>
                <TextInput
                    placeholder={STRINGS.enterYourMobileNumnerOR}
                    style={styles.textInputStyle}
                    placeholderTextColor={COLORS.darkWhite}
                    onChangeText={(e)=>setEnterMobileOrNo(e)}
                />
                <View style={{ height: H(4.5) }} />
                <CustomeButton
                    onPress={() => getOtp()}
                    btnText={STRINGS.getOtp}
                    
                    />
                <Text style={styles.termTextStyle}>{STRINGS.termsPrivacy}</Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default OtpVerification