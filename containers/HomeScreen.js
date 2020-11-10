import React from "react";
import {View, Text, Image, Button, StyleSheet} from "react-native";
import axios from 'axios';
import ListContainer from '../components/ListContainer';
import FullWidthImage from 'react-native-fullwidth-image';

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

class HomeScreen extends React.Component {

    dataName = [
        "popular", "upcoming"
    ];

    API_NAME = {
        popular: "/movie/popular",
        upcoming: "/movie/upcoming"
    };

    constructor(props) {
        super(props)
        this.state  = {
            dataContainer: {
                popular: [],
                upcoming: []
            },
            loaded: false
        }
    }

    getDataFetch = () => {
        const mDataContainer = {
            popular: {},
            upcoming: {}
        };
        this.dataName.forEach(function (value) {
            axios
                .get(API_URL + this.API_NAME[value] + "?api_key=" + API_KEY)
                .then(response => {
                    console.log('getting data from fetch', response);
                    setTimeout(() => {
                        this.setState({
                            loaded: true
                        });
                        mDataContainer[value] = response
                    }, 2000);
                })
                .catch(error => console.log(error));
        });
        this.setState({
           dataContainer: {
               popular: mDataContainer["popular"].results,
               upcoming: mDataContainer["upcoming"].results
           }
        });
    }

    componentDidMount() {
        this.getDataFetch()
    }

    render() {
        return (
            <View>
                <FullWidthImage
                    style={styles.imgBanner}
                    source={require('../assets/header1.png')}
                    resizeMode="cover"
                />
                <ListContainer
                    listType={this.dataName[0]}
                    dataResult={this.state.dataContainer[this.dataName[0]]}/>
                <ListContainer
                    listType={this.dataName[1]}
                    dataResult={this.state.dataContainer[this.dataName[1]]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center"
    },
    header: {
        backgroundOrigin: require('../assets/header1.png'),
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff',
        fontStyle: 'bold'
    },
    imgBanner: {
        height: 100
    }
})

export default HomeScreen;
