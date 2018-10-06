import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.biru}>SELAMAT DATANG YESICA!</Text>
        <Text>Nama: Yesica Adelia Ramadani </Text>
        <Text>Kelas: XI_RPL 4 </Text>
        <Text>No.Absen: 34 </Text>
        <Image style={{width: 400, height:500}}
        source={require('./yesica.jpg')}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    biru: {
      color: '#54c9ff',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
    }
});

export default Home