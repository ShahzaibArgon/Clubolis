import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS, H, RFVALUE, STYLESHEET, W } from "../../constants/StyleCommonfile";

const CustomeButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.5}
            style={styles.btn}>
            <Text style={styles.btnTextStyle}>{props.btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = STYLESHEET.create({
    btn: {
        width: W(90),
        height: H(6.7),
        borderRadius: H(4),
        backgroundColor: COLORS.secondary,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTextStyle: {
        color: COLORS.white,
        fontSize: RFVALUE(18),
        fontFamily: FONTS.Bold,
    }
})

export default CustomeButton;