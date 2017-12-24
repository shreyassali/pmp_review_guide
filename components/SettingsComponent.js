import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List, ListItem, Left, Body, Right } from 'native-base';

export default class SettingsComponent extends React.Component {
  render()
  {
    const {
        manifest
    } = Constants;
    const sections =
    [
      {
        data: [{value: manifest.book, icon: "ios-bookmarks"}],
        title: "Get Review Guide"
      },
      {
        data: [{value: manifest.about, icon: "ios-information-circle"}],
        title: "About Us"
      },
      {
        data: [{value: manifest.share, icon: "md-share"}],
        title: "Share"
      },
      {
        data: [{value: manifest.feedback, icon: "ios-chatbubbles"}],
        title: "Feedback"
      },
      {
        data: [{value: manifest.pmi, icon: "ios-bookmarks"}],
        title: "PMI"
      },
      {
        data: [{value: manifest.knowledgeareas, icon: "ios-open"}],
        title: "PMP/CAPM Knowledge Areas"
      },
      {
        data: [{value: "How to use this App?", icon: "ios-information-circle"}],
        title: "How to use this App?"
      },
    ];

    return ( <SectionList style = {styles.container}
        renderItem = {this._renderItem}
        keyExtractor = {this._keyExtractor}
        ListHeaderComponent = {ListHeader}
        sections = {sections}/>
      );
  }

  _keyExtractor = (item, index) => index;

  _handleOnPress = (item) => {
    let emailBodyStr = "I just downloaded PMP/CAPM Quick Reference app on my phone. It is a smartphone app and it will let you review the PMP certificate Exam concepts. Please download it if you have smart phone."

    const {
        manifest
    } = Constants;
    switch (item.value) {
      case 'PMP/CAPM Quick Reference':
        WebBrowser.openBrowserAsync("https://www.amazon.com/PMP-CAPM-Exam-Quick-Reference-ebook/dp/B074D68L3D");
        break;
      case 'About Us':
        Alert.alert(manifest.name + " AppVersion # " + manifest.version);
        break;
      case 'Share with friends':
        Linking.openURL('mailto:?subject=PMP/CAPM Quick Reference &body='+emailBodyStr);
        break;
      case 'Share your feedback':
        Linking.openURL('mailto:pmpquickreference@gmail.com?subject=PMP/CAPM Quick Reference&body=Share your feedback: ');
        break;
      case 'Apply to PMI':
        WebBrowser.openBrowserAsync("https://www.pmi.org/certifications/types/project-management-pmp");
        break;
      case 'How to use this App?':
        WebBrowser.openBrowserAsync("https://pmpguide-b8d72.firebaseapp.com/project_mgmt_framework.html");
        break;
      case 'Processes and Knowledge Areas':
        WebBrowser.openBrowserAsync("https://pmpguide-b8d72.firebaseapp.com/project_mgmt_framework.html");
    }
  };

  _renderItem = ({item}) => {
      return (
        <List>
          <ListItem icon button onPress={() => this._handleOnPress(item)}>
            <Left>
              <Ionicons name={item.icon} size={28} color="#8e6de3" />
            </Left>
            <Body>
              <Text style={styles.sectionContentText}>{item.value}</Text>
            </Body>
            <Right>
              <Ionicons name="ios-arrow-forward" size={25} color="#a39f9f"/>
            </Right>
          </ListItem>
       </List>
      );
    };
}

//list from following funtion is a separator between header and following list. It is intensionally kept it blank
const ListHeader = () => {
  const {
      manifest
  } = Constants;

  return (
    <View>
      <View style = {styles.titleContainer}>
        <View style = {styles.titleIconContainer}>
          <AppIconPreview iconUrl = {manifest.iconUrl}/>
        </View >

        <View style = {styles.titleTextContainer}>
          <Text style = {styles.nameText} numberOfLines = {1}> {manifest.name} </Text>
          <Text style={styles.slugText} numberOfLines={1}>{manifest.slug}</Text>
          <Text style ={styles.descriptionText}> {manifest.description} < /Text>
        </View>

      </View>

      <List>
        <ListItem itemDivider>
        <Text></Text>
        </ListItem>
      </List>

  </View>
  );
};

const AppIconPreview = ({iconUrl}) => {
  if (!iconUrl)
  {
    iconUrl = "https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png";
  }
  return (
    <Image source = {{uri: iconUrl}} style = {{width: 64,height: 64}} resizeMode = "cover"/>
  );
};

const Color = ({value}) => {
  if (!value) {
    return <View/> ;
  } else {
      return (
        <View style = {styles.colorContainer}> <View style = {[styles.colorPreview, {backgroundColor: value}]}/>
          <View style={styles.colorTextContainer}>
            <Text style={styles.sectionContentText}>{value}</Text>
          </View>
        </View >
      );
    }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
  titleContainer: {
      paddingHorizontal: 15,
      paddingTop: 15,
      paddingBottom: 15,
      flexDirection: 'row',
  },
  titleIconContainer: {
      marginRight: 15,
      paddingTop: 2,
  },
  sectionContentText: {
      fontSize: 16,
      paddingLeft: 10,
  },
  nameText: {
      fontWeight: '600',
      fontSize: 18,
  },
  slugText: {
      color: '#a39f9f',
      fontSize: 14,
      backgroundColor: 'transparent',
      paddingLeft: 3,
  },
  descriptionText: {
      fontSize: 14,
      marginTop: 6,
      color: '#4d4d4d',
      paddingLeft: 2,
  },
  colorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  colorPreview: {
      width: 17,
      height: 17,
      borderRadius: 2,
      marginRight: 6,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#ccc',
  },
  colorTextContainer: {
      flex: 1,
  },
});
