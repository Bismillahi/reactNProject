import React from "react";
import {View, Text, Image, Button, StyleSheet} from "react-native";
import axios from 'axios';

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
                            loaded: true,
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

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff',
        fontStyle: 'bold'
    }
})

export default HomeScreen;
