import * as React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import profileImage from '../../assets/profile.png';
import searchIcon from '../../assets/search.png';
import cardimage from '../../assets/Card.png';
import senticon from '../../assets/send.png';
import recievedicon from '../../assets/recieve.png';
import loanicon from '../../assets/loan.png';
import topupicon from '../../assets/topUp.png';

//Transaction assets
import applelogo from '../../assets/apple.png';
import spotifylogo from '../../assets/spotify.png';
import moneytransfericon from '../../assets/moneyTransfer.png';
import groceryicon from '../../assets/grocery.png';

//Components
import ActionButton from '../../components/actionbutton';
import TransactionTemp from '../../components/transactiontemp';

export default function HomeScreen() {
    return(
        <SafeAreaView>
            <View style = {styles.container}>

            
                {/* Welcome back side  */}
                <View style = {styles.welcomebacksectioncontainer}>
                    

                    <View style = {styles.profileandtextview}>
                        <Image style = {styles.userimage} source={profileImage}></Image>

                        <View style = {styles.welcomebacktextview} >
                            <Text style = {styles.welcomebcktext}>Welcome back!</Text>
                            <Text style = {styles.welcomebckusername}>Eric Atsu</Text>
                        </View>
                        
                    </View>
                    <View style = {styles.iconbaground}>
                        <Image style = {styles.searchicon} source={searchIcon}></Image>
                    </View>
                    

                </View>

                {/* Credit card image  */}
                <View style={styles.cardimageview}>
                    <Image style={styles.cardimage} source={cardimage}/>
                </View>

                {/* Sent / recieved buttons section */}
                <View style={styles.sentrecievedsection}>
                    {/* I have the inner one so that i can add the padding  */}
                    <View style={styles.sentandrecievedcontainer}>
                        {/* Takes data from the action button and renders it here. Important for code simplification */}
                        <ActionButton label="Sent" icon={senticon}/>
                        <ActionButton label="Recieve" icon={recievedicon}/>   
                        <ActionButton label="Loan" icon={loanicon}/>   
                        <ActionButton label="Topup" icon={topupicon}/>                       
                    
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {/* Transactions Section*/}
                    <View>

                        {/* Transaction and see all component at the top */}
                        <View style = {styles.transactionandseeallsection}>
                            <Text style = {styles.transactiontxt}>Transactions</Text>
                            <Text style = {styles.seealltxt} >See All</Text>
                        </View>

                        {/* Cards Below */}
                        <View>
                            {/* Prop will go here */}
                            <TransactionTemp
                                title="Apple Store"
                                category='Entertainment'
                                logo={applelogo}
                                amount = '-$5,99'
                            />

                            {/* Prop 2 */}
                            <TransactionTemp
                                title="Spotify"
                                category='Music'
                                logo={spotifylogo}
                                amount = '-$12.99'
                            />

                            {/* Prop 3 */}
                            <TransactionTemp
                                title="Money Transfer"
                                category='Transaction'
                                logo={moneytransfericon}
                                amount = '$300'
                            />
                            
                            {/* Prop 4 */}
                            <TransactionTemp
                                title="Grocery"
                                category='Food'
                                logo={groceryicon}
                                amount = '-$88'
                            />

                            {/* Prop 5 */}
                            <TransactionTemp
                                title="jjjjj"
                                category='blogs'
                                logo={applelogo}
                                amount = '-$11'
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>        
    );   
};

const styles = StyleSheet.create({
    
    container: {
        paddingHorizontal:30,
        paddingTop :20,
    },
    welcomebacksectioncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userimage:{
        width: 70,
        height: 70,
    },

    profileandtextview: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    welcomebacktextview: {
        marginLeft: 20,
    },
    welcomebcktext:{
        fontSize: 18,
        marginBottom: 5,

    },
    welcomebckusername:{
        fontSize: 19,
        fontWeight: 'bold',
    },
    searchicon:{
        width: 30,
    },
    iconbaground:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#E5E4E2',
        justifyContent:'center',
        alignItems:'center',
    },
    cardimageview:{
        marginTop: 30,
        alignItems:'center',
    },
    cardimage:{
        width: 355,
        height: 210,
    },
    sentrecievedsection:{
        paddingHorizontal:10,
        marginTop: 35,
    },
    sentandrecievedcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    transactionandseeallsection:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 10,
        marginTop:40,
    },
    transactiontxt:{
        fontWeight: '900',
        fontSize: 18,
    },
    seealltxt:{
        fontSize: 16,
        color:'blue',
    },
    scrollViewContent:{
        marginBottom: 300,
        paddingBottom:300,
    },

});