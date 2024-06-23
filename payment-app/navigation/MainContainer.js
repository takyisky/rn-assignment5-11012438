import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//So we do this with the idea of creating our main cotainer.
//The rest is embedded in it.

//Screens 
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyCardsScreen from './screens/MyCardsScreen'
import StatisticsScreen from './screens/StatisticsScreen';

//Screen names 
const homeName = 'Home';
const settingsName = 'Settings';
const myCardsName = 'MyCards';
const statisticsName = 'Statistics';

const Tab = createBottomTabNavigator();

export default function MainContainer (){
    return(
        <NavigationContainer >
            <Tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route}) =>  ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    //instead of using route.name plenty times due it its length we decide to assign it to a variable rn
                    let rn = route.name;
                    // Logic that tells the home and the other buttons how they should display base don certain conditions
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === settingsName ) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (rn === myCardsName ) {
                        iconName = focused ? 'card' : 'card-outline';
                    } else if (rn === statisticsName ) {
                        iconName = focused ? 'pie-chart' : 'pie-chart-outline';
                    }

                    //what returns the <Ionicon>
                    return <Ionicons name={iconName} size={size} color={color}/> 
                },

                //Styling the tab bar
                tabBarActiveTintColor: '#4194cb',
                tabBarInactiveTintColor: 'gray',
                
                //Styling the labels in the tab bar
                tabBarLabelStyle: {
                    paddingBottom: 10, fontSize:10,
                },

                //Stling the whole tab bar.
                tabBarStyle: {
                    padding: 10, height:100,
                },
                
                headerShown:false,
            })} 
            
            >

                {/* This would render it to the bottom of the screen */}
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={myCardsName} component={MyCardsScreen} />
                <Tab.Screen name={statisticsName} component={StatisticsScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />


            </Tab.Navigator>
        </NavigationContainer>
    );
};