import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const ThirdPage = ({navigation}) => {
    const copyRight = "Copyright © 2020 Sellstory Inc. All rights reserved.";
    
    const navigateToLogin = () => {
        navigation.dispatch(
            CommonActions.reset({
                routes: [
                    { name: "Login" }
                ]
            })
        );
    };
    return(
        <>
            <View style={styles.container}>
                <Image style={styles.img_onBoarding} source={require('../../res/img/ATSAY_Onboarding.png')}/>
                <View style={styles.rectangle_thick}/>
                <View style={styles.rectangle_thin}/>
                <View style={styles.container_circle}>
                    <View style={styles.circle_1}/>
                    <View style={styles.circle_2}/>
                    <View style={styles.circle_3}/>
                </View>
                <TouchableOpacity style={styles.rectangle_round} onPress={navigateToLogin}>
                    <Text style={styles.txt_login}>시작하기</Text>
                </TouchableOpacity>
                <Text style={styles.txt_copyRight}>{copyRight}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF"
    },
    img_onBoarding: {
        marginTop: "22%",
        height: "33%",
        marginLeft: "auto",
        marginRight: "auto",
        resizeMode: "contain"
    },
    rectangle_thick: {
        width: 152,
        height: "5.7%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 6,
        backgroundColor: "#e6e6e6"
    },
    rectangle_thin: {
        width: 234,
        height: "1.9%",
        borderRadius: 3,
        backgroundColor: "#e6e6e6",
        marginTop: "1.8%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    container_circle: {
        width: 234,
        height: 8,
        display: "flex",
        flexDirection: "row",
        marginTop: "6.5%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    circle_1: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#e6e6e6",
        marginLeft: 91
    },
    circle_2: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#e6e6e6",
        marginLeft: 14,
    },
    circle_3: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#9a9a9a",
        marginLeft: 14
    },
    rectangle_round: {
        width: 303,
        height: "6.5%",
        borderRadius: 25,
        backgroundColor: "#e6e6e6",
        marginTop: "5.8%",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
    },
    txt_login: {
        height: "auto",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto"
    },
    txt_copyRight: {
        marginTop: "auto",
        marginBottom: "2.3%",
        marginLeft: "auto",
        marginRight: "auto",
    }
});

export default ThirdPage;


