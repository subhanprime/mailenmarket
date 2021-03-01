
import { StatusBar, useState } from 'expo-status-bar';
import React, { StrictMode } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import items from './data/data';

function List() {
    return (
        <View style={styles.container}>
            <ScrollView>

                {
                    items.map((item, ind) => {
                        return (
                            <View style={styles.list} key={ind}>

                                <Image
                                    style={styles.img}
                                    source={{ uri: item.url }}
                                />
                                <View style={styles.info}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={styles.text}>{item.price} Rs</Text>
                                </View>
                            </View>

                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e6f3ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    head: {
        height: 15,
        width: '100%',
        backgroundColor: '#47d147'

    },
    list: {
        backgroundColor: '#47d147',
        // flex: 1,
        // padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '90%'

    },
    img: {
        height: 250,
        width: '100%',
        borderRadius: 10
    },
    text: {
        padding: 10,
        fontSize: 20,
        color: '#f2f2f2'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
})
