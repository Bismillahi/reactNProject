import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const IMAGE_DOMAIN_URL = "https://image.tmdb.org/t/p/w500/"

const MovieItem = ({
    title, poster, year,
    genre, teams, actors,
    rating
                   }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
            style={styles.imageItem}
            src={{
                uri: IMAGE_DOMAIN_URL + {poster}
            }}/>
        <View style={styles.detailItem}>
            <Text style={styles.titleText}>
                {title}
            </Text>
            <Text style={styles.secTitleText}>
                {year}
            </Text>
            <Text style={styles.genreText}>
                {genre}
            </Text>
            <Text style={styles.listText}>
                {teams}
            </Text>
            <Text style={styles.listText}>
                {actors}
            </Text>
        </View>
        <View style={styles.ratingItem}>
            <Text style={styles.ratingText}>
                {rating}
            </Text>
            <Image
                style={styles.ratingImg}
                src={require()}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    imageItem: {
        flex: 0,
        width: 80,
        height: 120
    },
    detailItem: {
        flex: 2
    },
    titleText: {
        fonSize: 24,
        fonWeight: "bold",
        color: '#000000'
    },
    secTitleText: {
        fonSize: 20,
        color: '#808080'
    },
    genreText: {
        fonSize: 14,
        color: '#808080',
        ellipsizeMode: "tail"
    },
    listText: {
        fonSize: 12,
        color: '#808080',
        ellipsizeMode: "tail"
    },
    ratingItem: {
        flex: 1,
        flexDirection: "row"
    },
    ratingText: {
        flex: 1,
        fonSize: 36,
        fonWeight: "bold",
        color: '#000000'
    },
    ratingImg: {
        felx: 0
    }
})

export default MovieItem;