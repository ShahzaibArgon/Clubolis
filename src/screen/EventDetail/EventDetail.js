import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './Styles'
import { COLORS, H, IMAGES, STRINGS, W } from '../../constants/StyleCommonfile';
import Header from '../../components/Header/Header';
import { SliderBox } from "react-native-image-slider-box";
import CustomeButton from '../../components/CustomeButton/CustomeButton';
import { BUYTICKETS } from '../../constants/Navigation';

const EventDetail = (props) => {
    const images = [
        IMAGES.laptop,
        IMAGES.artAndDesign,
        IMAGES.FoodCart,
    ]
    return (
        <SafeAreaView style={styles.container}>
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
            <View style={{ height: 10 }} />
            <ImageBackground
                source={IMAGES.eventBackground}
                style={styles.backGroundImageStyle}>
                <TouchableOpacity style={styles.inviteFriendContiner}>
                    <Text style={styles.inviteFriendTextStyle}>{STRINGS.Invitefriends}</Text>
                    <Image
                        source={IMAGES.groupProfile}
                        resizeMode={'contain'}
                        style={styles.groupProfileImageStyle}
                    />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.startRatingContiner}>
                <View style={styles.whiteContiner}>
                    {
                        [1, 2, 3, 4, 5].map((item) => {
                            return (
                                <Image
                                    resizeMode={'contain'}
                                    source={IMAGES.emptyStarRating}
                                    style={styles.starRatingStyle}
                                />
                            )
                        })
                    }
                </View>
                <View style={styles.ratingContinerStyle} >
                    <Text style={styles.ratingTextStyle}>4.6</Text>
                </View>
            </View>

            <Text style={styles.aboutTextStyle}>{STRINGS.About}</Text>
            <Text style={styles.desTextStyle}>{STRINGS.aboutDes}</Text>
            <View style={{ height: H(5) }} />
            <CustomeButton
                btnText={STRINGS.BuyTicket}
                onPress={() => props.navigation.navigate(BUYTICKETS)}
            />

        </SafeAreaView>
    )
}

export default EventDetail;
