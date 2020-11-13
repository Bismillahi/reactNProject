import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';

class MovieDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View
                style={styles.detailScreenContiner}
            >
                <Image
                    style={styles.poster}
                />
                <Text>Title</Text>
                <View>
                    <Text>Durasi</Text>
                    <Text>Tanggal rilis</Text>
                </View>
                <Text>Genre</Text>
                <FlatList
                    data={}
                    renderItem={}
                />
                <Text>Kru</Text>
                <Text>Rating</Text>
                <Text>Overview</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailScreenContiner: {
        flex: 1,
        flexDirection: 'column',
    },
    poster: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    }
})
