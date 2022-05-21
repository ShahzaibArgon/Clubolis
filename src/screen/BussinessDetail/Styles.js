import { COLORS, H, STYLESHEET, W, RFVALUE, FONTS } from "../../constants/StyleCommonfile";
export default STYLESHEET.create({
    continer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    imageStyle: {
        width: W(94),
        height: H(40),
        alignSelf: 'center',
        borderTopRightRadius: H(9),
        borderBottomLeftRadius: H(9)
    },
    locationTimeContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: W(90),
        marginVertical: H(2),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dateTimeTextStyle: {
        color: COLORS.white,
        paddingLeft: H(1),
        fontSize: RFVALUE(8),
        fontFamily: FONTS.medium
    },
    locationImageStyle: {
        width: W(3.5),
        height: H(2)
    },
    dateTimeTextStyle: {
        color: COLORS.darkWhite,
        paddingLeft: H(1),
        fontSize: RFVALUE(11),
        fontFamily: FONTS.medium
    },
    timeContiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headingTextStyle: {
        color: COLORS.bottomTabSqureColor,
        fontSize: RFVALUE(20),
        fontFamily: FONTS.Bold,
        width: W(90),
        alignSelf: 'center'
    },
    ratingTextStyle: {
        fontSize: RFVALUE(11),
        fontFamily: FONTS.Bold,
        color: COLORS.white,
    },
    ratingContinerStyle: {
        width: W(9),
        justifyContent: 'center',
        alignItems: 'center'
    },
    starRatingStyle: {
        width: W(6),
        height: H(4)
    },
    whiteContiner: {
        width: W(35),
        backgroundColor: COLORS.white,
        height: H(3.7),
        borderRadius: H(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: H(1)
    },
    startRatingContiner: {
        width: W(45),
        backgroundColor: COLORS.secondary,
        height: H(4),
        marginLeft: H(2.2),
        marginVertical: H(1),
        borderRadius: H(3),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.secondary
    },
    aboutTextStyle: {
        fontSize: RFVALUE(14),
        color: COLORS.black,
        fontFamily: FONTS.Bold,
        width: W(90),
        alignSelf: 'center'
    },
    desTextStyle: {
        color: '#0009',
        width: W(90),
        alignSelf: 'center',
        textAlign: 'justify'
    },
    readMoreTextStyle: {
        fontSize: RFVALUE(10),
        fontFamily: FONTS.Bold,
        color: COLORS.white,
    },
    readMoreBtn: {
        backgroundColor: COLORS.primary,
        width: W(23),
        height: H(3),
        backgroundColor: COLORS.secondary,
        borderRadius: H(1),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: H(2.3),
        elevation: 10
    },
    bottomcontiner: {
        flexDirection: 'row',
        alignItems: 'center',
        width: W(90),
        alignSelf: 'center',
        height: H(5),

    },
    bussinesImageStyle: {
        width: W(8),
        height: H(2.6)
    },
    bussinessTextStyle: {
        fontSize: RFVALUE(7),
        color: '#00000A'
    },
    line: {
        width: W(0.2),
        height: H(2),
        backgroundColor: COLORS.darkWhite
    },
    rightContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: H(2),
        width: W(60),
        justifyContent: 'space-between'
    }
})