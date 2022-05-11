import React, { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './Styles'
import { COLORS, IMAGES, STRINGS, W } from '../../constants/StyleCommonfile';
import Header from '../../components/Header/Header';
import { SliderBox } from "react-native-image-slider-box";
const EventDetail = (props) => {
    const images = [
        IMAGES.laptop,
        IMAGES.artAndDesign,
        IMAGES.FoodCart,
    ]
    return (
        <View style={styles.container}>
            <Header
                imageName={IMAGES.whiteBackArrow}
                isHomeScreen={true}
                appNameImage={IMAGES.whiteAppLogo}
                rightSideImage={IMAGES.whiteBellIcon}
            />
            <SliderBox
                images={images}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor={COLORS.secondary}
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                style={styles.imageStyle}
            />
            <View style={styles.headingAmountContiner}>
                <Text style={styles.headingTextStyle}>{STRINGS.FoodDaFiesta}</Text>
                <Text style={styles.headingTextStyle}>{STRINGS.amount}</Text>
            </View>
            <View style={styles.locationTimeContiner}>
                <View style={[styles.timeContiner, { width: W(40) }]}>
                    <Image
                        resizeMode={'contain'}
                        source={IMAGES.clock}
                        style={styles.locationImageStyle}
                    />
                    <Text style={styles.dateTimeTextStyle}>{STRINGS.dateTime}</Text>
                </View>
                <View style={styles.timeContiner}>
                    <Image
                        source={IMAGES.location}
                        resizeMode={'contain'}
                        style={styles.locationImageStyle}
                    />
                    <Text style={styles.dateTimeTextStyle}>{STRINGS.locationName}</Text>
                </View>
            </View>

            <ImageBackground
                source={IMAGES.eventBackground}
                style={styles.backGroundImageStyle}
            >

            </ImageBackground>

        </View>
    )
}

export default EventDetail;
