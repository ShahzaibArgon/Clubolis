import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import styles from './Styles';
import Header from '../../components/Header/Header'
import { COLORS, IMAGES, W, STRINGS, H } from '../../constants/StyleCommonfile';
import { SliderBox } from "react-native-image-slider-box";
import { TouchableOpacity } from 'react-native-gesture-handler';
const BussinessDetail = (props) => {
    const images = [
        IMAGES.laptop,
        IMAGES.artAndDesign,
        IMAGES.FoodCart,
    ]
    return (
        <SafeAreaView style={styles.continer}>
            <Header
                onBackPress={() => props.navigation.goBack()}
                imageName={IMAGES.blackBackArrow}
                isHomeScreen={true}
                appNameImage={IMAGES.appNameLogo}
                rightSideImage={IMAGES.blackBellIcon}
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
            <View style={styles.locationTimeContiner}>
                <View style={[styles.timeContiner]}>
                    <Image
                        resizeMode={'contain'}
                        source={IMAGES.LocationIcon}
                        style={styles.locationImageStyle}
                    />
                    <Text style={styles.dateTimeTextStyle}>{STRINGS.locationName}</Text>
                </View>
                <View style={styles.timeContiner}>
                    <Image
                        source={IMAGES.emailIcon}
                        resizeMode={'contain'}
                        style={styles.locationImageStyle}
                    />
                    <Text style={styles.dateTimeTextStyle}>{'(042) 35261062'}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.headingTextStyle}>{STRINGS.FoodCornerTruck}</Text>
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
            </View>
            <Text style={styles.aboutTextStyle}>{STRINGS.About}</Text>
            <Text style={styles.desTextStyle}>{STRINGS.aboutDes}</Text>
            <View style={{ height: H(1) }} />
            <TouchableOpacity style={styles.readMoreBtn}>
                <Text style={styles.readMoreTextStyle}>{STRINGS.Readmore}</Text>
            </TouchableOpacity>
            <View style={{ height: H(3) }} />
            <View style={styles.bottomcontiner}>
               
                <Image
                    resizeMode={'contain'}
                    source={IMAGES.bussinessFactory}
                    style={styles.bussinesImageStyle}
                />
                <View style={styles.rightContiner}>
                <Text style={styles.bussinessTextStyle}>{STRINGS.BusinessName}</Text>
                <View style={styles.line} />
                <Text style={styles.bussinessTextStyle}>{STRINGS.BusinessCategory}</Text>
                <View style={styles.line} />
                <Text style={styles.bussinessTextStyle}>{STRINGS.BusinessNumber}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BussinessDetail;