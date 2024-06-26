import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Component for a transaction history so we will just pass in the props on the home screen
const TransactionTemp = ({category, amount, title, logo, iconColor}) => {

    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    const [isOn, setisOn] = useState(true);

    function toggleSwitch(){
        setisOn(isOn => !isOn);
        toggleTheme();
    }

    const styles = getStyles(isDarkMode);

    return (
            <View style={styles.container}>
                <View style={styles.imageandtitlecontainer}>
                    <View style={styles.logobaground}>
                        <Ionicons name={logo} size={24} color={iconColor} style={styles.logo} />
                    </View>
                    
                    <View style={styles.textcontainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.category}>{category}</Text>
                    </View>

                </View>
                
                <Text style={styles.amount} >{amount}</Text>

            </View>
    );
};

export default TransactionTemp;

const getStyles = (isDarkMode) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:13,
        marginTop:15,
    },
    imageandtitlecontainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    logobaground:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor: isDarkMode ? '#232323' : '#E5E4E2',
        justifyContent:'center',
        alignItems:'center',
    },
    textcontainer:{
        marginLeft:30,
    },
    logo:{

    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:isDarkMode?'white':'black',
    },
    amount:{
        fontWeight:'bold',
        color:isDarkMode?'white':'black',
    },
    category:{
        color:isDarkMode?'white':'black',
    },

});