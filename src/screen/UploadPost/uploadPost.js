import React from 'react';
import { View, Text, Image, TextInput, SafeAreaView ,TouchableOpacity} from 'react-native';
import styles from './Styles';
import Header from '../../components/Header/Header';
import { W, H, IMAGES, STRINGS } from '../../constants/StyleCommonfile';
import CustomeButton from '../../components/CustomeButton/CustomeButton';

const UploadPost = (props) => {
    return (
        <SafeAreaView style={styles.continer}>
            <Header
                imageName={IMAGES.blackBackArrow}
                isHomeScreen={true}
                appNameImage={IMAGES.appNameLogo}
                rightSideImage={IMAGES.blackBellIcon}
                onBackPress={()=>props.navigation.goBack()}
            />
            <View style={styles.textContiner}>
                <Text style={styles.textStyle}>{STRINGS.youliketoshare}</Text>
                <Image
                    source={IMAGES.activityImage}
                    resizeMode={'contain'}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.captionProfileContiner}>
                <Image
                    source={IMAGES.ProfileImage}
                    resizeMode={'contain'}
                    style={styles.profileImageStyle}
                />
                <TextInput
                    placeholder={STRINGS.writeCapation}
                    style={styles.textInputStyle}
                />
            </View>

            <View style={styles.line} />
            <CustomeButton
                btnText={STRINGS.UploadPost}
            />
            <TouchableOpacity style={styles.btnContiner}>
                <Image
                    source={IMAGES.galleryIcon}
                    resizeMode={'contain'}
                    style={styles.galleryIconStyle}
                />
                <Text>{STRINGS.Addapicturevideo}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default UploadPost;
