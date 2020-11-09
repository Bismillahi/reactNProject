import React, { useEffect } from 'react';
import { View, Text, StyleSheet,
    Image, FlatList, TouchableOpacity,
    ImageBackground } from "react-native";

const API_DETAIL_URL = "https://api.themoviedb.org/3/movie/"
const API_KEY = "c696ae5550ca0ba0e92a7be8d9a60acf"

const UpcomingList = props => {
    const { dataSource } = props

    return(
        <FlatList
            data={dataSource}
            horizontal={true}
            renderItem={({item, index, separators}) => (
                <TouchableOpacity>
                    <ImageBackground
                        style={styles.imageBG}
                        source={{ uri: dataSource.backdrop}}>

                    </ImageBackground>
                </TouchableOpacity>
            )}/>
    );
}

const styles = StyleSheet.create({
    imageBG: {
        resizeMode: "cover",
        justifyContent: "center"
    }
})

export default UpcomingList;
