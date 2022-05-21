import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { STRINGS, IMAGES, H, FONTS, COLORS } from "../../constants/StyleCommonfile";
import Header from '../../components/Header/Header'
import styles from './styles'
const BussinessForum = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                imageName={IMAGES.bacKarrow}
                isHomeScreen={true}
                appNameImage={IMAGES.whiteAppLogo}
                rightSideImage={IMAGES.edit}
                onBackPress={()=>props.navigation.goBack()}
            />
            <View style={styles.whiteContiner}>
            </View>
        </SafeAreaView>
    )
}

export default BussinessForum;