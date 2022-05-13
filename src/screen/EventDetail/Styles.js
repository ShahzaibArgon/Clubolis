import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommonfile";
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
    backGroundImageStyle: {
        width: W(100),
        height: H(8),
        marginVertical: H(2)
    },
    inviteFriendTextStyle: {
        fontSize: RFVALUE(9),
        fontFamily: FONTS.Bold,
        color: COLORS.white
    },
    groupProfileImageStyle: {
        width: W(5),
        height: H(2)
    },
    inviteFriendContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        height: H(5),
        justifyContent: 'space-between',
        paddingHorizontal: H(2)
    },
    aboutTextStyle: {
        fontSize: RFVALUE(14),
        color: COLORS.white,
        fontFamily: FONTS.Bold,
        color: COLORS.white,
        width: W(90),
        alignSelf: 'center'
    },
    desTextStyle: {
        color: COLORS.white,
        width: W(90),
        alignSelf: 'center',
        textAlign: 'justify'
    },
    startRatingContiner:{
        width:W(45),
        backgroundColor:COLORS.secondary,
        height:H(4),
        marginLeft:H(2.2),
        marginVertical:H(1),
        borderRadius:H(3),
        flexDirection:'row',
        alignItems:'center'
    },
    whiteContiner:{
         width:W(35),
         backgroundColor:COLORS.white,
         height:H(4),
         borderRadius:H(2),
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-around',
         paddingHorizontal:H(1)
    },
    ratingTextStyle:{
        fontSize:RFVALUE(11),
        fontFamily:FONTS.Bold,
        color:COLORS.white,
    },
    ratingContinerStyle:{
       width:W(9),
       justifyContent:'center',
       alignItems:'center'
    },
    starRatingStyle:{
        width:W(6),
        height:H(4)
    }
})