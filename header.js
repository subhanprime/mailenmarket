import { StatusBar, useState } from 'expo-status-bar';
import React, { StrictMode } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            {/* <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            /> */}
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://mailenmarket.com/wp-content/uploads/2020/05/mailen-market-logo.png',
                }}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    logo: {

        // fontSize: 30,
        marginTop: 10,
        padding: 10,
        color: '#fff',
        resizeMode: "contain",
        // marginRight: 20,
        height: 100,
        width: 200



        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',

    }
})