import React from "react";
import { View, Text } from 'react-native';
import { STRINGS, STYLESHEET, W } from "../../constants/StyleCommonfile";

const CustomeTextInput = () => {
    return (
        <View style={styles.TextInputContiner}>
            <Text >{STRINGS.BusinessName}</Text>
        </View>
    )
}

const styles = STYLESHEET.create({
    TextInputContiner: {
        width: W(90),
        backgroundColor: '#ada',
        alignSelf:'center',
    }
})

export default CustomeTextInput;