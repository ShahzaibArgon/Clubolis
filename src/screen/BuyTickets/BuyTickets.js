import React,{useState} from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './Styles';
import Header from '../../components/Header/Header';
import { IMAGES, STRINGS, W } from '../../constants/StyleCommonfile';
import LinearGradient from 'react-native-linear-gradient';
import CustomeButton from '../../components/CustomeButton/CustomeButton';


const BuyTickets = (props) => {
    const [count ,setCount] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <Header
                onBackPress={()=>props.navigation.goBack()}
                imageName={IMAGES.whiteBackArrow}
                isHomeScreen={true}
                appNameImage={IMAGES.whiteAppLogo}
                rightSideImage={IMAGES.whiteBellIcon} />
            <Image
                source={IMAGES.FoodCart}
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
                        style={styles.locationImageStyle} />
                    <Text style={styles.dateTimeTextStyle}>{STRINGS.locationName}</Text>
                </View>
            </View>
            <LinearGradient
                colors={['#9400D3', '#4B0082',]}
                style={styles.botttomLayerContiner}
                start={{ x: 0.3, y: 0 }} end={{ x: 1, y: 0 }}>
                <Image
                    source={IMAGES.checkOutImage}
                    resizeMode={'contain'}
                    style={styles.checkOutImageStyle}
                />
                <View style={{ height: 30 }} />
                <View style={styles.countContiner}>
                    <TouchableOpacity onPress={()=> {count ===0?0: setCount(count-1)}} >
                        <Image
                            source={IMAGES.mius}
                            resizeMode={'contain'}
                            style={styles.plusminusIconStyle}
                        />
                    </TouchableOpacity>
                    <View style={styles.totalCountContiner}>
                        <Text style={styles.countTextStyle}>{count}</Text>
                    </View>
                    <TouchableOpacity
                     onPress={()=>setCount(count+1)}
                    >
                        <Image
                            source={IMAGES.plus}
                            resizeMode={'contain'}
                            style={styles.plusminusIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 30 }} />
                <CustomeButton
                    btnText={`${STRINGS.checkout}$36`}
                />
            </LinearGradient>
        </SafeAreaView>
    )
}

export default BuyTickets;