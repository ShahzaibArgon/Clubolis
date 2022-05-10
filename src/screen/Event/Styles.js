import { COLORS, H, STYLESHEET, W, RFVALUE, FONTS } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    imageStyle: {
        width: W(92),
        height: H(24),
        alignSelf: 'center',
        borderTopRightRadius: H(9),
        borderBottomLeftRadius: H(9)
    },
    searchImageStyle: {
        width: W(12),
        height: H(6),
        marginRight: H(-4),
        zIndex: 1
    },
    textInputContiner: {
        fontSize: RFVALUE(14),
        fontFamily: FONTS.Regular,
        borderWidth: 1,
        width: W(70),
        height: H(6),
        borderColor: COLORS.white,
        borderRadius: H(3),
        paddingLeft: H(5),
        backgroundColor: COLORS.white,
        elevation: 10,
        zIndex: -1
    },
    searchContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: RFVALUE(23),
        fontFamily: FONTS.Bold,
        paddingLeft: H(2),
        marginTop: H(2)
    },
    dayTextStyle: {
        color: COLORS.secondary
    }
})