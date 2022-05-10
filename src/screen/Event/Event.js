import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { COLORS, H, IMAGES, STRINGS, W } from '../../constants/StyleCommonfile';
import Header from "../../components/Header/Header";
import styles from './Styles'
import CustomeEvent from "../../components/EventList/EventList";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const Event = (props) => {
    const headerComponent = () => {
        return (
            <>
                <Header
                    imageName={IMAGES.whiteBackArrow}
                    isHomeScreen={true}
                    appNameImage={IMAGES.whiteAppLogo}
                    rightSideImage={IMAGES.whiteBellIcon}
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
        <ScrollView style={styles.continer}>
            <View style={styles.continer}>

                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={() => <CustomeEvent />}
                    ListHeaderComponent={() => headerComponent()}
                    ListFooterComponent={()=><View style={{height:30}} />}
                />


            </View>
        </ScrollView>
    )
}
export default Event;