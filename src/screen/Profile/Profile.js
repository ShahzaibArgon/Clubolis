import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'
import { STRINGS, IMAGES, H, FONTS, COLORS } from "../../constants/StyleCommonfile";
import Header from '../../components/Header/Header'
const Profile = (props) => {
    const [screens, setScreens] = useState([
        {
            id: 1,
            name: STRINGS.YourFavourites,
            image: IMAGES.favourite,
            navigation: '',
        },
        {
            id: 2,
            name: STRINGS.wallet,
            image: IMAGES.Wallet,
            navigation: '',
        },
        {
            id: 3,
            name: STRINGS.Tickets,
            image: IMAGES.Ticket,
            navigation: '',
        },
        {
            id: 4,
            name: STRINGS.TellYourFriends,
            image: IMAGES.groupProfile,
            navigation: '',
        },
        {
            id: 5,
            name: STRINGS.Promotions,
            image: IMAGES.promotios,
            navigation: '',
        },
        {
            id: 6,
            name: STRINGS.ChangeYourPassword,
            image: IMAGES.password,
            navigation: '',
        }
    ])

    return (
        <View style={styles.continer}>
            <Header
                imageName={IMAGES.bacKarrow}
                isHomeScreen={true}
                appNameImage={IMAGES.appNameLogo}
                rightSideImage={IMAGES.edit}
            />
            <View style={styles.whiteContiner}>
                <Image
                    source={IMAGES.ProfileImage}
                    style={styles.profileImageStyle}
                    resizeMode={'contain'}
                />
                <Text style={styles.userNameTextStyle}>{STRINGS.userName}</Text>
                <Text style={styles.userEmailTextStyle}>{STRINGS.userEmail}</Text>
                <View style={styles.userInfoContiner}>
                    <View style={styles.infoContinerStyle}>
                        <Image
                            source={IMAGES.emailIcon}
                            resizeMode={'contain'}
                            style={styles.iconImageStyle}
                        />
                        <Text style={styles.detailTextStyle}>{'(042) 35261062'}</Text>
                    </View>

                    <View style={styles.infoContinerStyle}>
                        <Image
                            source={IMAGES.emailIcon}
                            resizeMode={'contain'}
                            style={styles.iconImageStyle}
                        />
                        <Text style={styles.detailTextStyle}>{'Patriciajhon@gmail.com'}</Text>
                    </View>
                    <View style={styles.infoContinerStyle}>
                        <Image
                            source={IMAGES.LocationIcon}
                            resizeMode={'contain'}
                            style={styles.iconImageStyle}
                        />
                        <Text style={styles.detailTextStyle}>{'Lipsy, London'}</Text>
                    </View>
                </View>
                <View style={styles.userPostFollowerContiner}>
                    <View style={styles.followerContiner}>
                        <Text style={styles.postTextStyle}>{'102'}</Text>
                        <Text style={styles.foloowerTextStyle}>{STRINGS.Follwing}</Text>
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={styles.followerContiner}>
                        <Text style={styles.postTextStyle}>{'98'}</Text>
                        <Text style={styles.foloowerTextStyle} >{STRINGS.Followers}</Text>
                    </View>
                    <View style={styles.lineStyle} />
                    <View style={styles.followerContiner}>
                        <Text style={styles.postTextStyle}>{'38'}</Text>
                        <Text style={styles.foloowerTextStyle}>{STRINGS.Posts}</Text>
                    </View>
                </View>

                <View style={styles.screensContiner}>
                    {screens.map((item) => {
                        return (
                            <TouchableOpacity style={styles.btnContiner}>
                                <Image resizeMode={'contain'}
                                    style={styles.imageStyle}
                                    source={item.image} />
                                <Text style={styles.textStyle}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{ height: H(4) }} />
                <TouchableOpacity style={styles.logoutBtn}>
                    <Image resizeMode={'contain'}
                        style={styles.imageStyle}
                        source={IMAGES.logout} />
                    <Text style={[styles.textStyle, { fontFamily: FONTS.Bold, color: COLORS.primary }]}>{STRINGS.Logout}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile;