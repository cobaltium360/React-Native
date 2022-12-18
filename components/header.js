import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function Header({ navigation }) {
    const img = '../image/fond_header.png';
    
    return (
        <View style={styles.container_header}>
            <ImageBackground source={require('../image/fond_header.png')} style={styles.image}>
                <Text style={styles.text_header}>RANDOM FN</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container_header: {
        height: 150,
        width: "100%"
    },
    image: {
        
        justifyContent: "center",
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },
    text_header: {
        fontSize: 32,
        textAlign: "center",
        color:"white",
        fontWeight:"bold"
    }
});
