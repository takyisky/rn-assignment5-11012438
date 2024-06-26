import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ActionButton = ({ icon, label, iconColor }) => {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    const [isOn, setisOn] = useState(true);

    function toggleSwitch(){
        setisOn(isOn => !isOn);
        toggleTheme();
    }
    const styles = getStyles(isDarkMode);
    
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.buttonbaground} >
                <Ionicons name={icon} size={24} color={iconColor} style={styles.logo} />
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>

    );
    
};

export default ActionButton ;

const getStyles = (isDarkMode) => StyleSheet.create({

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonbaground: {
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor: isDarkMode ? '#232323' : '#E5E4E2',
        justifyContent:'center',
        alignItems:'center',

    },
    label:{
        color: isDarkMode?  'white' : 'black',

    },
}) 

