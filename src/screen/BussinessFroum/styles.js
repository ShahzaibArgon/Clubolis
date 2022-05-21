import { STYLESHEET,H ,W,STRINGS,FONTS,RFVALUE ,COLORS} from "../../constants/StyleCommonfile";

export default STYLESHEET.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary
    },
    whiteContiner: {
        width: W(100),
        height: H(83),
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: H(7),
        borderTopLeftRadius: H(7)
    },
})