import * as React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import profileImage from '../../assets/profile.png';
import searchIcon from '../../assets/search.png';
import cardimage from '../../assets/Card.png';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Components
import ActionButton from '../../components/actionbutton';
import TransactionTemp from '../../components/transactiontemp';
import { useTheme } from '../../context/ThemeContext';

export default function HomeScreen() {

    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    const [isOn, setisOn] = useState(true);

    function toggleSwitch(){
        setisOn(isOn => !isOn);
        toggleTheme();
    }

    const styles = getStyles(isDarkMode);

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
                        <Ionicons name='search' size={24} color={isDarkMode? 'white' : 'black'} />

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
                        <ActionButton label="Sent" icon='arrow-down' iconColor={isDarkMode ? 'white' : 'black'} />
                        <ActionButton label="Recieved" icon= 'arrow-up' iconColor={isDarkMode ? 'white' : 'black'} />   
                        <ActionButton label="Loan" icon= 'logo-usd' iconColor={isDarkMode ? 'white' : 'black'} />   
                        <ActionButton label="Topup" icon='cloud-upload' iconColor={isDarkMode ? 'white' : 'black'} />                       
                    
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
                                logo= 'logo-apple'
                                amount = '-$5,99'
                                iconColor={isDarkMode ? 'white' : 'black'}
                            />

                            {/* Prop 2 */}
                            <TransactionTemp
                                title="Github"
                                category='Technology'
                                logo= 'logo-github'
                                amount = '-$12.99'
                                iconColor={isDarkMode ? 'white' : 'black'}

                            />

                            {/* Prop 3 */}
                            <TransactionTemp
                                title="Money Transfer"
                                category='Transaction'
                                logo='enter'
                                amount = '$300'
                                iconColor={isDarkMode ? 'white' : 'black'}
                            />
                            
                            {/* Prop 4 */}
                            <TransactionTemp
                                title="Grocery"
                                category='Food'
                                logo='pricetag'
                                amount = '-$88'
                                iconColor={isDarkMode ? 'white' : 'black'}
                            />

                            {/* Prop 5 */}
                            <TransactionTemp
                                title="Twitch"
                                category='Steaming'
                                logo='logo-twitch'
                                amount = '-$11'
                                iconColor={isDarkMode ? 'white' : 'black'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>        
    );   
};


const getStyles = (isDarkMode) => StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    container: {
        paddingHorizontal:30,
        paddingTop :20,
        backgroundColor: isDarkMode ? '#000016' : '#fff',
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
        color: isDarkMode ? '#fff' : '#000',

    },
    welcomebckusername:{
        fontSize: 19,
        fontWeight: 'bold',
        color: isDarkMode ? '#fff' : '#000',
    },
    searchicon:{
        width: 30,
    },
    iconbaground:{
        width:60,
        height:60,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: isDarkMode ? '#232323' : '#E5E4E2',
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
        color: isDarkMode ? '#fff' : '#000',
    },
    seealltxt:{
        fontSize: 16,
        color: isDarkMode ? '#7ebde9' : 'blue',
    },
    scrollViewContent:{
        marginBottom: 300,
        paddingBottom:300,
    },
})