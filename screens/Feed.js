import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,StatusBar,SafeAreaView,Image, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
let stories = require("./temp_stories.json");
export default class Feed extends Component {
    renderItem = ({ item: story }) => {
        return <StoryCard post={story} navigation={this.props.navigation}/>;
      };
    
      keyExtractor = (item, index) => index.toString();
    render() {
        
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Spectagram</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={stories}
                    renderItem={this.renderItem}
                />
            </View>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentheight:RFValue(25)
    },
    appTitle:{
        flex:0.07,
        flexDirection:'row',
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:'center'
    },
    appTitleText:{
        color:'white',
        fontSize:RFValue(28)
    },
    cardContainer:{
        flex:0.85
    }

})