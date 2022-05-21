import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { COLORS, H, IMAGES, STRINGS, W } from '../../constants/StyleCommonfile';
import Header from "../../components/Header/Header";
import styles from './Styles'
import CustomeEvent from "../../components/EventList/EventList";

const Event = (props) => {
    const headerComponent = () => {
        return (
            <>

                <Header
                    imageName={IMAGES.whiteBackArrow}
                    isHomeScreen={true}
                    appNameImage={IMAGES.whiteAppLogo}
                    rightSideImage={IMAGES.whiteBellIcon}
                    onBackPress={()=>props.navigation.goBack()}
                />
                <Image
                    source={IMAGES.laptop}
                    resizeMode={'contain'}
                    style={styles.imageStyle}
                />
                <View style={{ height: H(3) }} />
                <View style={styles.searchContiner}>
                    <Image
                        resizeMode={'contain'}
                        source={IMAGES.search}
                        style={styles.searchImageStyle}
                    />
                    <TextInput
                        placeholder={STRINGS.SearchUsername}
                        style={styles.textInputContiner}
                    />
                </View>
                <Text style={styles.textStyle}>
                    <Text>{STRINGS.ThisWeek}</Text>
                    <Text style={styles.dayTextStyle}> {STRINGS.thursday}</Text>
                </Text>
            </>
        )
    }


    return (
        <SafeAreaView style={styles.continer} >
            <ScrollView style={styles.continer}>
                <StatusBar backgroundColor={COLORS.primary} barStyle={'dark-content'} />
                <View style={styles.continer}>

                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={() => <CustomeEvent {...props} />}
                        ListHeaderComponent={() => headerComponent()}
                        ListFooterComponent={() => <View style={{ height: 30 }} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Event;