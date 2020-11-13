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
                onChangeText={onTextChanged}
            />
            <MaterialIcons name={"search"} size={28} style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: deviceWidth - 64,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#888888',
        alignItems: 'center',
        justifyContent: 'center',
        paddingEnd: 12,
        paddingStart:12,
    },
    formField: {
        flex: 1,
        paddingEnd: 12,
        paddingStart:12,
        fontSize: 18,
        height: 50,
        marginRight: 12,
    },
    icon: {
        flex: 0,
    }
})

export default SearchComponent;
