import { COLORS, H, STYLESHEET, W, RFVALUE, FONTS } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    eventListContiner: {
        width: W(95),
        height: H(18),
        overflow: 'hidden',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: H(3),
        justifyContent: 'space-between'

    },
    eventImageStyle: {
        width: W(25),
        height: H(11.5),
        marginTop: H(-1.5)
    },
    timeTextStyle: {
        fontSize: RFVALUE(7),
        fontFamily: FONTS.medium,
        color: COLORS.secondary,
        marginVertical:H(0.2)
    },
    rightContiner: {
        width: W(60),
        height: H(10)
    },
    bottomContiner: {
        flexDirection: 'row',
        width: W(50),
        justifyContent: 'space-between',
        marginTop: H(1)
    },
    btn: {
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: W(7),
        height: H(2.5),
        borderRadius: H(0.5)
    },
    btnTextStyle: {
        fontSize: RFVALUE(8),
        fontFamily: FONTS.Bold,
        color: COLORS.white
    }

})