import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';

const OnBoarding = ({navigation}) => {
    return(
        <>
            <ViewPager style={styles.viewPager}>
                <View key="1">
                    <FirstPage/>
                </View>
                <View key="2">
                    <SecondPage/>
                </View>
                <View key="3">
                    <ThirdPage navigation={navigation}/>
                </View>
            </ViewPager>
        </>
    )
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
});

export default OnBoarding;


