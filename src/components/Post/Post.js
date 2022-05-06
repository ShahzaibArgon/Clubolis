import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { H, IMAGES, STRINGS } from "../../constants/StyleCommonfile";
import styles from './Styles'
const Post = (props) => {
    return (
        <View style={styles.postContiner}>
            <View style={styles.userInfoContainer}>
                <Image
                    source={IMAGES.ProfileImage}
                    resizeMode={'contain'}
                    style={styles.profileImageStyle}
                />
                <View>
                    <Text style={{ paddingLeft: H(1) }}>
                        <Text style={styles.nameTextStyle}>{STRINGS.userName} </Text>
                        <Text style={styles.tagTextStyle}>{'@Bentonjhon_1'}</Text>
                    </Text>
                    <Text style={styles.desTextStyle}>{STRINGS.postDes}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.followTextStyle}>{STRINGS.Follow}</Text>
                </TouchableOpacity>
            </View>
            <Image
                source={IMAGES.postImage}
                resizeMode={'cover'}
                style={styles.postImageStyle}
            />
            <View style={styles.postBottomContiner}>
                <View style={styles.likeShareBtnContaoner}>
                    <TouchableOpacity style={styles.btncontiner}>
                        <Image
                            resizeMode={'contain'}
                            source={IMAGES.like}
                            style={styles.likeImageStyle}
                        />
                        <Text>156</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btncontiner}>
                        <Image
                            resizeMode={'contain'}
                            source={IMAGES.comment}
                            style={styles.likeImageStyle}
                        />
                        <Text>56</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btncontiner}>
                        <Image
                            resizeMode={'contain'}
                            source={IMAGES.share}
                            style={styles.likeImageStyle}
                        />
                        <Text>20</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image
                        resizeMode={'contain'}
                        source={IMAGES.book}
                        style={styles.likeImageStyle}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post;