import React from 'react';
import { Image, StyleSheet } from 'react-native';

let styles;

const Photo = (props) => {
    const {image} = styles;
    const { params } = props.navigation.state;
    return(
        <Image style={image} source={{uri: params.image}} />
    );
}

styles = StyleSheet.create({
    image: {
        flex: 1,
        alignSelf: 'stretch'
    }
})

export default Photo;