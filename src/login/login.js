import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const Login = ({navigation}) => {
    const copyRight = "Copyright © 2020 Sellstory Inc. All rights reserved.";
    
    useEffect(()=>{
        
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.txt_login}>로그인 화면 입니다.</Text>
            <Text style={styles.txt_copyRight}>{copyRight}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    txt_login: {
        textAlign: "center"
    },
    txt_copyRight: {
        marginTop: "auto",
        marginBottom: "2.3%",
        marginLeft: "auto",
        marginRight: "auto",
    }
});

export default Login;


