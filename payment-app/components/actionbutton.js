import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const ActionButton = ({ icon, label }) => (
    <View style={styles.buttonContainer}>
        <View style={styles.buttonbaground} >
            <Image source={icon} style={styles.icon} />
        </View>
        <Text style={styles.label}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonbaground: {
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#E5E4E2',
        justifyContent:'center',
        alignItems:'center',
    },
}) 

export default ActionButton ;