import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

//Component for a transaction history so we will just pass in the props on the home screen
const TransactionTemp = ({category, amount, title, logo}) => {
    return (
            <View style={styles.container}>
                <View style={styles.imageandtitlecontainer}>
                    <View style={styles.logobaground}>
                        <Image source={logo} style={styles.logo} />
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

const styles = StyleSheet.create ({
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
        backgroundColor:'#E5E4E2',
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
    },
    amount:{
        fontWeight:'bold',
    },

});