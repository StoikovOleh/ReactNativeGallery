import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Image} from 'react-native';

let styles;

const Gallery = (props) => {
    const {
        text,
        element, 
        gallery
    } = styles; 
    function log(url){
        props.navigate('Photo', { image:  url });
    }
    
    return(
        <View style={gallery}>
            {props.data.map( (item, id) => 
                <View key={item.id} style={element}>    
                    <TouchableHighlight onPress={() => {log(item.user.avatars.default.https)}}>
                        <Image source={{uri: item.user.avatars.default.https, minWidth: 100, height: 100 }} />
                    </TouchableHighlight>
                    <Text style={text}>{item.name}</Text>
                </View>
            )
            }
        </View>
    );
}

styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  gallery: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  element: {
     flexGrow: 1,
     flexBasis:100,
     margin: 5
  }
  
})

export default Gallery;