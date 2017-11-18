import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Banner = (props) => (
  <SafeAreaView style={styles.bannerContainer} forceInset={{ vertical: 'never' }}>
    <View style={styles.banner}>
      <Text style={styles.title}>{props.headerText}</Text>
    </View>
  </SafeAreaView>
);

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#673ab7',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: 19,
    fontWeight: '200',
    color: '#fff',
    margin: 10,
    alignItems: 'center',
  },
});
