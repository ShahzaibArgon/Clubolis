import { COLORS, H, STYLESHEET, W, RFVALUE, FONTS } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    imageStyle: {
        width: W(94),
        height: H(25),
        alignSelf: 'center',
        borderTopRightRadius: H(9),
        borderBottomLeftRadius: H(9)
    },
    headingAmountContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W(90),
        justifyContent: 'space-between',
        alignSelf: 'center',
        height: H(7),
        marginTop: H(2)
    },
    headingTextStyle: {
        fontSize: RFVALUE(20),
        fontFamily: FONTS.Bold,
        color: COLORS.white
    },
    locationImageStyle: {
        width: W(4),
        height: H(2)
    },
    timeContiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationTimeContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: W(90)
    },
    dateTimeTextStyle: {
        color: COLORS.white,
        paddingLeft: H(1),
        fontSize: RFVALUE(8),
        fontFamily: FONTS.medium
    },
    botttomLayerContiner: {
        width: W(100),
        height: H(50),
        marginTop: H(3),
        borderTopLeftRadius: H(5),
        borderTopRightRadius: H(5)
    },
    checkOutImageStyle: {
        width: W(35),
        height: H(18),
        alignSelf: 'center',
        marginVertical: H(2.5)
    },
    totalCountContiner: {
        backgroundColor: COLORS.white,
        width: W(18),
        height: W(18),
        borderRadius: W(18),
        alignItems: 'center',
        justifyContent: 'center'
    },
    countTextStyle: {
        fontSize: RFVALUE(22),
        color: COLORS.bottomTabSqureColor,
        fontFamily: FONTS.Bold
    },
    plusminusIconStyle: {
        width: W(7),
        height: H(4)
    },
    countContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: W(55),
        alignSelf: 'center'
    }
})