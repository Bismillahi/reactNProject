import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Dimensions} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const deviceWidth = Dimensions.get('window').width;

const SearchComponent = props => {
    const { onTextChanged } = props;

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={"Nama film ..."}
                style={styles.formField}
                placeholderTextColor={'#888888'}
            />
            <MaterialIcons name={"search"} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        top: 50,
        width: deviceWidth - 40,
        left: 20,
        zIndex: 99,
        backgroundColor: 'white'
    },
    formField: {
        flex: 1,
        borderWidth: 1,
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        fontSize: 18,
        height: 50
    },
    icon: {
        flex: 0,
        width: 28,
        height: 28,
    }
})

export default SearchComponent;
