import React from "react";
import { View, Text, Image, TextInput, FlatList } from 'react-native';
import Header from "../../components/Header/Header";
import styles from './Styles'
import { H, IMAGES, STRINGS } from '../../constants/StyleCommonfile'
import Post from "../../components/Post/Post";
const ActivityScreen = (props) => {
    return (
        <View style={styles.continer}>
            <Header
                imageName={IMAGES.blackBackArrow}
                isHomeScreen={true}
                appNameImage={IMAGES.appNameLogo}
                rightSideImage={IMAGES.blackBellIcon}
            />
            <View style={styles.textContiner}>
                <Text style={styles.textStyle}>{STRINGS.youliketoshare}</Text>
                <Image
                    source={IMAGES.activityImage}
                    resizeMode={'contain'}
                    style={styles.imageStyle}
                />
            </View>
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
            <View style={styles.line} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1, 2, 3, 4]}
                renderItem={() => (<Post />)}
                ItemSeparatorComponent={() => <View style={{ height: H(7) }} />}
                keyExtractor={(item) => item.id}
            />

        </View>
    )
}

export default ActivityScreen;