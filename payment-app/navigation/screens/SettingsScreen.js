import * as React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../context/ThemeContext';


export default function SettingsScreen({navigation}) {

    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    const [isOn, setisOn] = useState(true);

    function toggleSwitch(){
        setisOn(isOn => !isOn);
        toggleTheme();
    }

    const styles = getStyles(isDarkMode);



    return(
        <SafeAreaView style={styles.safeArea} >
        <View style={styles.container}>
            {/* Top View */}
            <View style = {styles.centeredview}>
                <Text style = {styles.settingtxt}>Settings</Text>
            </View>

            {/* Bottom View */}
            <View style = {styles.middleview}>

                {/* Language Section */}
                <View style = {styles.horizontalview} >
                    <Text style = {styles.titletxt} > Language </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color={isDarkMode ? '#fff' : '#000'}/>
                </View>
                {/* Line bar */}
                <View style = {styles.horizontalline} />

                {/* My profile Section */}
                <View style = {styles.horizontalview} >
                    <Text style = {styles.titletxt} > My Profile </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
                </View>
                {/* Line bar */}
                <View style = {styles.horizontalline} />

                {/* Contact Us Section */}
                <View style = {styles.horizontalview} >
                    <Text style = {styles.titletxt} > Contact Us </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
                </View>
                {/* Line bar */}
                <View style = {styles.horizontalline} />

                {/* Change Password Section */}
                <View style = {styles.horizontalview} >
                    <Text style = {styles.titletxt} > Change password </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
                </View>
                {/* Line bar */}
                <View style = {styles.horizontalline} />

                {/* Privacy Policy Section */}
                <View style = {styles.horizontalview} >
                    <Text style = {styles.titletxt} > Privacy Policy </Text>
                    <Ionicons name="chevron-forward-outline" size={24} color={isDarkMode ? '#fff' : '#000'} />
                </View>
                {/* Line bar */}
                <View style = {styles.horizontalline} />

            </View>

            {/* End View */}
            <View style = {styles.themebtnview} >
                <Text style = {styles.themetxt}> Theme </Text>
                <TouchableOpacity 
                    style = {[
                        styles.outer,
                        isOn
                            ? {justifyContent:'flex-end',backgroundColor:"black"}
                            : {justifyContent:'flex-start',backgroundColor:"gray"}
                            ]}
                        activeOpacity={1}
                        onPress={toggleSwitch}>
                    <View style = {[styles.inner]} />
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
        
    );   
};

const styles = StyleSheet.create({
    container: {
        
    },

    //Used to center the Setting Text
    centeredview:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        
    },

    //The Midddle part of the Page 
    middleview:{
        marginTop:50,
    },

    //The Setting Text Style 
    settingtxt:{
        fontWeight: '500',
        fontSize: 25,
    },

    //The view of each horizontal view arter the setting heading
    horizontalview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },

    //Styling of each title eg.language, my profile and the others.
    titletxt:{
        fontWeight: '500',
        fontSize: 20,
    },

    //The line below each horizontal section
    horizontalline:{
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 20,
        marginHorizontal:20,
    },
    
    //The view that hold the Theme text and toggle and toggle 
    themebtnview:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:40,
        alignItems:'center'
    },

    //Then theme text 
    themetxt:{
       fontSize: 30,
       fontWeight: '600',
    },

    //The outer on the Toggle button - The background
    outer: {
        width: 60,
        height: 30,
        borderRadius: 18,
        elevation:8,
        shadowOffset: {width: 0, height:0},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: 'gray',
        paddingHorizontal: 5,
        paddingVertical:18,
        alignItems:'center',
        flexDirection:'row',  
    },

    //The small circle of teh toogle
    inner: {
        width: 28,
        height: 28,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    
})

const getStyles = (isDarkMode) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: isDarkMode ? '#000016' : '#fff',
    },
    container: {
        backgroundColor: isDarkMode ? '#000016' : '#fff',
        
    },
    centeredview: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    settingtxt: {
        fontWeight: '500',
        fontSize: 25,
        color: isDarkMode ? '#fff' : '#000',
    },
    middleview: {
        marginTop: 50,
    },
    horizontalview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    titletxt: {
        fontWeight: '500',
        fontSize: 20,
        color: isDarkMode ? '#fff' : '#000',
    },
    horizontalline: {
        height: 1,
        backgroundColor: isDarkMode ? '#333' : '#ccc',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    themebtnview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 40,
        alignItems: 'center',
    },
    themetxt: {
        fontSize: 30,
        fontWeight: '600',
        color: isDarkMode ? '#fff' : '#000',
    },
    outer: {
        width: 60,
        height: 30,
        borderRadius: 18,
        elevation: 8,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        backgroundColor: 'gray',
        paddingHorizontal: 5,
        paddingVertical: 18,
        alignItems: 'center',
        flexDirection: 'row',
    },
    inner: {
        width: 28,
        height: 28,
        borderRadius: 15,
        backgroundColor: 'white',
    },
});