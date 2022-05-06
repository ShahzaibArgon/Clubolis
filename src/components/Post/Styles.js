import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from '../../constants/StyleCommonfile'
export default STYLESHEET.create({
    postContiner: {
        width: W(90),
        height: H(30),
        alignSelf: 'center',
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    profileImageStyle: {
        width: W(12),
        height: H(8)
    },
    tagTextStyle: {
        fontSize: RFVALUE(8),
        fontFamily: FONTS.Regular,
        color: COLORS.lightBlack
    },
    nameTextStyle: {
        fontSize: RFVALUE(13),
        fontFamily: FONTS.Bold,
        color: COLORS.bottomTabSqureColor,
        textAlign: 'center',
    },
    desTextStyle: {
        fontSize: RFVALUE(8),
        color: COLORS.black,
        fontFamily: FONTS.medium,
        width: W(65),
        paddingLeft: H(1)
    },
    followTextStyle:{
        color:COLORS.secondary,
        fontSize:RFVALUE(10),
        fontFamily:FONTS.Bold,
    },
    postImageStyle:{
        width:W(90),
        height:H(24),
        borderRadius:H(3),
    },
    postBottomContiner:{
        flexDirection:'row',
        width:W(88),
        height:H(5),
        marginTop:H(1),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    likeImageStyle:{
        width:W(5),
        height:H(3)
    },
    likeShareBtnContaoner:{
        flexDirection:'row',
        alignItems:'center',
        width:W(40),
        justifyContent:'space-around'

    },
    btncontiner:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:W(12),
    }
})