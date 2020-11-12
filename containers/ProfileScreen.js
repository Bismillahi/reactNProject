import React, {Component} from "react"
import {View, Text, SafeAreaView, ScrollView, Image, Button, FlatList, TouchableOpacity, StyleSheet} from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Logo from "../components/Logo";
import CustomInputBox from "../components/CustomInputBox";
import CustomButton from "../components/CustomButton";

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        const DATA = [
            {
                id: '1',
                icon: 'email',
                title: "Email",
                desc: "kwonyuli1924@gmail.com",
            },
            {
                id: '2',
                icon: 'movie',
                title: "Genre yang Disukai",
                desc: "Romance, Slice of Life, Drama, Horror"
            }];
        const Item = ({ title, icon, desc }) => (
            <View style={styles.detailBox}>
                <MaterialIcons style={styles.icon} name={icon}/>
                <View style={styles.detailCont}>
                    <Text style={[styles.text, {fontSize: 14, textTransform: 'uppercase'}]}>{title}</Text>
                    <Text style={[styles.text, {color: '#000000'}]}>{desc}</Text>
                </View>
            </View>
        );
        const renderItem = ({ item }) => (
            <Item
                title={item.title}
                icon={item.icon}
                desc={item.desc}
            />
        );
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.header}>
                        <View style={{alignSelf: 'center'}}>
                            <View style={styles.profileImg}>
                                <Image
                                    source={require('../assets/pp.png')}
                                    style={styles.image}
                                    resizeMode="center"
                                />
                            </View>
                        </View>
                        <View style={styles.infoCont}>
                            <Text style={[styles.text, { fontWeight: 600, fontSize: 36, color: '#fff'}]}>Kwon Yuli</Text>
                            <Text style={[styles.text, { fontSize: 16, color: '#00000'}]}>South Korea</Text>
                        </View>
                    </View>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
    },
    header: {
        backgroundColor: '#F7981A',
        marginBottom: 8
    },
    text: {
        fontFamily: "Poppins",
        color: '#DC681E'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 6
    },
    profileImg: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 16,
        overflow: "hidden"
    },
    infoCont: {
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 16
    },
    detailCont: {
        flexDirection: 'col',
        justifyContent: "left"
    },
    detailBox: {
        backgroundColor: "#fff",
        borderRadius: 16,
        alignItems: 'center',
        marginHorizontal: 16,
        padding: 20,
        marginVertical: 8,
        flexDirection: 'row'
    },
    icon: {
        fontSize: "1.5em",
        padding: 4,
        marginRight: 4
    }
})
