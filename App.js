/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnBoarding } from './src/onBoarding';
import Login from './src/login/login';

const Stack = createStackNavigator();

const App = () => {
  
  const [ isFirst, setFirst ] = useState("No");
  const [ isLoading, setLoading ] = useState(true);

  const recordLaunch = async () => {
    try {
      await AsyncStorage.setItem("isFirstTime", "No");
    } catch(e) {
      console.log(e);
    }
  }

  const checkFirstTime = async () => {
    try {
      const isFirstTime = await AsyncStorage.getItem("isFirstTime");
      if(isFirstTime === null){
        setFirst(true);
      }
      setLoading(false);
    } catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    checkFirstTime();
    recordLaunch();
    setTimeout(()=>{
      SplashScreen.hide();
    }, 1000);
  }, []);

  const beforeLoading = (
    <View></View>
  );

  const afterLoading = (
    <NavigationContainer>
      <SafeAreaView style={styles.wrap}>
        <Stack.Navigator headerMode="none">
          {isFirst === true? <Stack.Screen name="OnBoarding" component={OnBoarding}/>: <></>}
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );

  return (
    <>
      { isLoading? beforeLoading: afterLoading }
    </>
  );
};



const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  }
});

export default App;
