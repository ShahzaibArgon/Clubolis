import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    otpSendImageStyle: {
        width: W(50),
        height: H(30),
        alignSelf: 'center',
        marginVertical: H(0.4),
    },
    otpVerificationTextStyle: {
        fontSize: RFVALUE(25),
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        textAlign: 'center',
        marginTop: H(4)

    },
    textContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondDesciptionTextStyle: {
        color: COLORS.darkWhite,
        fontSize: RFVALUE(12),
        fontFamily: FONTS.Regular,
        textAlign: 'center'
    },
    boldTextStyle: {
        color: COLORS.darkWhite,
        fontFamily: FONTS.Bold,
        fontSize: RFVALUE(12)
    },
    textInputStyle: {
        borderWidth: 1,
        borderRadius: H(1.5),
        width: W(85),
        height: H(6.5),
        borderColor: COLORS.darkWhite,
        alignSelf: 'center',
        marginVertical: H(5),
        color: COLORS.darkWhite,
        paddingLeft: H(2),
        fontFamily: FONTS.Regular,
        fontSize: RFVALUE(14),
    },
    termTextStyle: {
        fontSize: RFVALUE(11),
        color: COLORS.darkWhite,
        fontFamily: FONTS.medium,
        textAlign: 'center',
        width: W(70),
        alignSelf: 'center',
        marginTop: H(7)
    }
})