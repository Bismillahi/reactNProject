import React from "react";
import {View, Text, Image, Button} from "react-native";
import * as axios from "http";

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

class ListScreen extends React.Component {

    dataName = "top_rated";

    API_NAME = "/movie/top_rated";

    constructor(props) {
        super(props)
        this.state  = {
            dataResult: [],
            loaded: false
        }
    }

    getDataFetch = () => {
        axios
            .get(API_URL + this.API_NAME + "?api_key=" + API_KEY)
            .then(response => {
                console.log('getting data from fetch', response);
                setTimeout(() => {
                    this.setState({
                        loaded: true,
                        dataResult: response.results
                    });
                }, 2000);
            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getDataFetch()
    }

    render() {
        return (
            <View>
                {/*<ListContainer*/}
                {/*    listType={this.dataName}*/}
                {/*    dataResult={this.state.dataResult}/>*/}
            </View>
        );
    }
}

export default ListScreen;
