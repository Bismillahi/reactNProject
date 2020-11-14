import React from "react";
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from "react-native";
import axios from 'axios';
import ListContainer from '../components/ListContainer';
import PopularList from "../components/movie/popular/PopularList";
import UpcomingList from "../components/movie/upcoming/UpcomingList";
import FullWidthImage from 'react-native-fullwidth-image';

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {

    dataName = [
        "popular", "upcoming"
    ];

    static API_NAME = {
        popular: "/movie/popular",
        upcoming: "/movie/upcoming"
    };

    constructor(props) {
        super(props)
        this.state = {
            popularMovieData: [
                "item1",
                "item2",
                "item3",
                "item4",
                "item5",
                "item6",
                "item7",
                "item8",
                "item9",
                "item10"
            ],
            upcomingMovieData: [
                "item1",
                "item2",
                "item3",
                "item4",
                "item5"
            ],
            tempUpcomingMovieData: [],
            tempPopularMovieData: [],
            pmLoaded: false,
            umLoaded: false
        }
    }

    getDataFetch = () => {
        this.dataName.forEach((value) => {
            axios
                .get(API_URL + HomeScreen.API_NAME[value] + "?api_key=" + API_KEY)
                .then(response => {
                    console.log('getting data from fetch', response);
                    setTimeout(() => {
                        if (value === "popular") {
                            this.setState({
                                tempPopularMovieData: response.data.results,
                            });
                        } else {
                            this.setState({
                                tempUpcomingMovieData: response.data.results,
                            });
                            this.limitUMMovieData();
                        }
                    }, 2000);
                })
                .catch(error => console.log(error));
        });
    }

    limitUMMovieData = () => {
        let newMovieData = [];

        this.state.tempUpcomingMovieData.forEach((item, i) => {
            if (i <= 4) {
                newMovieData.push(item);
            }
        });

        this.setState({
            upcomingMovieData: newMovieData,
            umLoaded: true,
        });

        newMovieData = []

        this.state.tempPopularMovieData.forEach((item, i) => {
            if (i <= 9) {
                newMovieData.push(item);
            }
        });

        this.setState({
            popularMovieData: newMovieData,
            pmLoaded: true,
        });
    }

    componentDidMount() {
        this.getDataFetch();
    }

    render() {
        return (
            <View>
                <Image
                    style={styles.imgBanner}
                    source={require('../assets/header1.png')}
                    resizeMode="cover"
                />
                <ScrollView style={styles.container}>
                    <View>
                        <UpcomingList
                            dataSource={this.state.upcomingMovieData}
                            loaded={this.state.umLoaded}
                        />
                        <PopularList
                            dataSource={this.state.popularMovieData}
                            loaded={this.state.pmLoaded}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        backgroundColor: '#DC681E',
        height: 100
    },
    headerTitle: {
        fontSize: 24,
        color: '#ffffff'
    },
    imgBanner: {
        width: deviceWidth,
        height: deviceHeight * 0.22,
        overflow: "hidden"
    }
})
