import React, { useState } from "react";
import { View, Text, Image, TextInput, FlatList, ScrollView, SafeAreaView, StatusBar ,TouchableOpacity} from 'react-native';
import { COLORS, H, IMAGES, STRINGS, W } from '../../constants/StyleCommonfile';
import Header from "../../components/Header/Header";
import styles from './Styles'
import { BUSSINESSDETAIL } from "../../constants/Navigation";


const Home = (props) => {
    const [featureBussines, setFeaturedBussiness] = useState([
        {
            id: 1,
            name: STRINGS.CarWash,
            image: IMAGES.car
        },
        {
            id: 2,
            name: STRINGS.RealEstate,
            image: IMAGES.realEstate
        },
        {
            id: 3,
            name: STRINGS.FoodCart,
            image: IMAGES.FoodCart
        },
        {
            id: 4,
            name: STRINGS.ArtDesign,
            image: IMAGES.FoodCart
        },
        {
            id: 5,
            name: STRINGS.FoodCart,
            image: IMAGES.FoodCart
        },
        {
            id: 6,
            name: STRINGS.Pharmacy,
            image: IMAGES.phramacy
        },
    ])

    const renderFeatureBussiness = ({ item }) => {
        return (
            <TouchableOpacity 
             onPress={()=>props.navigation.navigate(BUSSINESSDETAIL)}
            style={{ alignItems: 'center' }}>
                <Image
                    source={item.image}
                    resizeMode={'cover'}
                    style={styles.featureImageStyle}
                />
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar backgroundColor={COLORS.primary} barStyle={'dark-content'} />
                <View style={styles.continer}>
                    <Header
                        imageName={IMAGES.blackBackArrow}
                        isHomeScreen={true}
                        appNameImage={IMAGES.appNameLogo}
                        rightSideImage={IMAGES.blackBellIcon}
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
                    <Text style={styles.featureBussinessStyle}>{STRINGS.FeaturedBusiness}</Text>
                    <View style={{ width: W(90), alignSelf: 'center' }}>
                        <FlatList
                            data={featureBussines}
                            renderItem={renderFeatureBussiness}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={3}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            ItemSeparatorComponent={() => (<View style={{ height: H(0.7) }} />)}
                        />
                    </View>
                    <View style={styles.allBussinessContiner}>
                        <Text style={styles.allBussinessTextStyle}>All Business</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;