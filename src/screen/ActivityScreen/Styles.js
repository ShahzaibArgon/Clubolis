import { STYLESHEET, W, H, COLORS, RFVALUE, FONTS } from "../../constants/StyleCommonfile";

export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    textContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W(90),
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    imageStyle: {
        width: W(35),
        height: H(20)
    },
    textStyle: {
        fontSize: RFVALUE(20),
        fontFamily: FONTS.Bold,
        color: COLORS.bottomTabSqureColor
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
    line: {
        width: W(85),
        height: H(0.1),
        backgroundColor: COLORS.lightBlack,
        alignSelf: 'center',
        marginVertical: H(4)
    }
})