import React from 'react';
import { View, Text, StyleSheet, Image, MaterialIcon } from 'react-native';

const icon = {
    "home": <MaterialIcon name={'home-filled'}/>,
    "list": <MaterialIcon name={'list'}/>,
    "profile": <MaterialIcon name={'person'}/>
};

const IconNavigation = ({ name, ...props }) => {
    return (
      <View style={styles.iconNavBottom}>
          {icon[{name}]}
          <Text style={styles.navText}></Text>
      </View>
    );
};

const styles = StyleSheet.create({
    iconNavBottom: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default IconNavigation;
