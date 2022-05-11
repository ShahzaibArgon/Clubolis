import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { EVENTDETAIL } from "../../constants/Navigation";
import { COLORS, H, IMAGES, W } from "../../constants/StyleCommonfile";
import styles from './Styles';

const CustomeEvent = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate(EVENTDETAIL)}>
            <ImageBackground
                resizeMode={'contain'}
                source={IMAGES.eventBackgroundLayer}
                style={styles.eventListContiner}
            >
                <View>
                    <Image
                        source={IMAGES.food}
                        resizeMode={'cover'}
                        style={styles.eventImageStyle}
                    />
                </View>
                <View style={styles.rightContiner}>
                    <Text style={styles.timeTextStyle}>
                        <Text>31 Sat, Mar 2022    </Text>
                        <Text>6:00 pm</Text>
                    </Text>
                    <Text style={styles.timeTextStyle}>
                        <Text style={[styles.timeTextStyle, { color: COLORS.white }]}>Tropicfisher: Tropical Thursday   </Text>
                        <Text style={[styles.timeTextStyle]}>   3074 miles</Text>
                    </Text>
                    <Text style={[styles.timeTextStyle, { color: '#9B60F8' }]}>1 Whole Olsteja Crescent, Lekki, Nigeria</Text>
                    <View style={styles.bottomContiner}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnTextStyle}>$118</Text>
                        </TouchableOpacity>
                        <Text style={[styles.timeTextStyle, { color: COLORS.darkWhite }]} >Ratings 4.7</Text>
                    </View>
                </View>

            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CustomeEvent;