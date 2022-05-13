import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { H, IMAGES, STYLESHEET, W } from "../../constants/StyleCommonfile";

const Header = (props) => {
    return (
        <View style={styles.continer}>
            <TouchableOpacity onPress={props.onBackPress}>
                <Image
                    source={props.imageName}
                    resizeMode={'contain'}
                    style={styles.backArrowImageStyle}

                />
            </TouchableOpacity>
            {props.isHomeScreen === true ?
                <>
                    <TouchableOpacity
                        disabled={true}>
                        <Image
                            source={props.appNameImage}
                            resizeMode={'contain'}
                            style={styles.appNameStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            resizeMode={'contain'}
                            style={styles.backArrowImageStyle}
                            source={props.rightSideImage} />
                    </TouchableOpacity>
                </>
                : null}
        </View>

    )
}

const styles = STYLESHEET.create({
    continer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: H(6),
        justifyContent: 'space-between',
        paddingHorizontal: H(1),

    },
    backArrowImageStyle: {
        width: W(8),
        height: H(2),
    },
    appNameStyle: {
        width: W(20),
        height: H(3),
    }

})

export default Header;