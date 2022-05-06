import { STYLESHEET, H, W, RFVALUE, FONTS, COLORS } from './../../constants/StyleCommonfile';

export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    whiteContiner: {
        width: W(100),
        height: H(75),
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: H(7),
        borderTopLeftRadius: H(7)
    },
    profileImageStyle: {
        width: W(24),
        height: H(14),
        alignSelf: 'center',
        marginTop: H(-5)
    },
    userNameTextStyle: {
        fontSize: RFVALUE(24),
        fontFamily: FONTS.Bold,
        color: COLORS.bottomTabSqureColor,
        textAlign: 'center',
        marginTop: H(1)
    },
    userEmailTextStyle: {
        textAlign: 'center',
        fontSize: RFVALUE(14),
        color: COLORS.lightBlack,
        fontFamily: FONTS.medium,
        marginTop: H(-1),
    },
    userInfoContiner: {
        marginVertical: H(1.5),
        width: W(85),
        alignSelf: 'center',
        height: H(11)
    },
    infoContinerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: H(0.5)
    },
    iconImageStyle: {
        width: W(4),
        height: H(2)
    },
    detailTextStyle: {
        paddingLeft: H(1.5),
        fontSize: RFVALUE(13),
        fontFamily: FONTS.Regular,
        color: COLORS.lightBlack
    },
    userPostFollowerContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W(100),
        height: H(12),
        alignSelf: 'center'
    },
    followerContiner: {
        width: W(33),
        alignSelf: 'center',
        alignItems: 'center',
        height: H(7),
        justifyContent: 'space-between'
    },
    postTextStyle: {
        fontSize: RFVALUE(12),
        fontFamily: FONTS.Bold,
        color: COLORS.lightBlack
    },
    foloowerTextStyle: {
        fontSize: RFVALUE(13),
        color: COLORS.darkWhite,
        fontFamily: FONTS.Regular
    },
    lineStyle: {
        width: W(0.3),
        height: H(6),
        alignSelf: 'center',
        backgroundColor: 'rgba(35, 31, 32, 0.5)',
        borderRadius: H(2)
    },
    screensContiner: {
        width: W(90),
        alignSelf: 'center'
    },
    btnContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: H(0.5),
    },
    imageStyle: {
        width: W(5),
        height: H(2.6),
    },
    textStyle: {
        fontSize: RFVALUE(13),
        color: COLORS.bottomTabSqureColor,
        fontFamily: FONTS.medium,
        paddingLeft: H(1)
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W(85),
        alignSelf: 'center'
    }
})