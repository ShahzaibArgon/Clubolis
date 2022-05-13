import { COLORS, H, STYLESHEET, W, RFVALUE, FONTS } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    imageStyle: {
        width: W(92),
        height: H(28),
        alignSelf: 'center',
        borderTopRightRadius: H(9),
        borderBottomLeftRadius: H(9),
        overflow: 'hidden'
    },
    searchImageStyle: {
        width: W(12),
        height: H(6),
        marginRight: H(-4),
        zIndex: 1
    },
    textInputContiner: {
        fontSize: RFVALUE(14),
        color: COLORS.lightBlack,
        fontFamily: FONTS.Regular,
        borderWidth: 1,
        width: W(83),
        height: H(6),
        borderColor: COLORS.bottomTabSqureColor,
        borderRadius: H(2.7),
        paddingLeft: H(5)
    },
    searchContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    featureBussinessStyle: {
        fontSize: RFVALUE(20),
        fontFamily: FONTS.Bold,
        color: COLORS.black,
        width: W(88),
        alignSelf: 'center',
        marginTop: H(2),
    },
    allBussinessTextStyle: {
        fontSize: RFVALUE(20),
        fontFamily: FONTS.Bold,
        color: COLORS.bottomTabSqureColor,
        paddingLeft: H(3.3),

    },
    allBussinessContiner: {
        width: W(100),
        height: H(8),
        backgroundColor: '#F0EFEF',
        justifyContent: 'center'
    },
    featureImageStyle: {
        width: W(28),
        height: H(14),
        borderRadius: H(2)
    },
    textStyle: {
        fontSize: RFVALUE(9),
        color: COLORS.bottomTabSqureColor,
        fontFamily: FONTS.medium
    }
})