import { StatusBar, useState } from 'expo-status-bar';
import React, { StrictMode } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import category from './data/category';

function Landing() {
    console.log(category)
    return (
        <View style={styles.container}>

            <View style={styles.box1}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/42/PSL-2019-Foodnerd-Islamabad.png' }}
                />
                {/* <Text>our deals</Text> */}
            </View>
            <View style={styles.box1}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZfnW0ktZOYpkSSe1RMr8HgscCEl0ScBBpg&usqp=CAU' }}
                />
            </View>
            <View style={styles.box1}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/42/PSL-2019-Foodnerd-Islamabad.png' }}
                />
            </View>
            <View style={styles.box1}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/42/PSL-2019-Foodnerd-Islamabad.png' }}
                />
            </View>
            {/* <View style={styles.box1}><Image
                style={styles.img}
                source={{ uri: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/42/PSL-2019-Foodnerd-Islamabad.png' }}
            /></View>
            <View style={styles.box1}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/42/PSL-2019-Foodnerd-Islamabad.png' }}
                />
            </View>
            <View style={styles.fbox}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/blog/cover_image/42/PSL-2019-Foodnerd-Islamabad.png' }}
                />
            </View>
            */}
            <View style={styles.foter}>

            </View>




        </View>

    )
}

export default Landing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'flex-start',
        justifyContent: 'center',
        // alignContent: 'center'
    },
    box1: {
        margin: 10,
        padding: 5,
        height: '18%',
        width: '100%',
        // backgroundColor: 'blue',
        borderRadius: 10,
        // justifyContent: 'center',
        // alignContent: 'center'

    },

    fbox: {
        width: '95%',
        height: '20%',
        backgroundColor: 'green',
        borderRadius: 10,
    },
    foter: {
        margin: 0,
        height: 70,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#47d147'
    },
    img: {
        width: '100%',
        height: 130,
        resizeMode: "contain",
    }



})