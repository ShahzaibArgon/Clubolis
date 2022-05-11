import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    imageStyle: {
        width: W(94),
        height: H(30),
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
        marginTop:H(2)
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
        alignSelf:'center',
        width:W(90)
    },
    dateTimeTextStyle: {
        color: COLORS.white,
        paddingLeft: H(1),
        fontSize: RFVALUE(8),
        fontFamily: FONTS.medium
    },
    backGroundImageStyle:{
        width:W(100),
        height:H(13),
        marginVertical:H(2)
    }
})