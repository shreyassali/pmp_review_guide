import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';
import { Constants, WebBrowser } from 'expo';
import { Linking, Alert } from 'react-native';

export default class SettingsComponent extends React.Component {
  render()
  {
    const {
        manifest
    } = Constants;
    const sections =
    [
      {
        data: [{value: manifest.book}],
        title: "Get Review Guide"
      },
      {
        data: [{value: manifest.about}],
        title: "About Us"
      },
      {
        data: [{value: manifest.share}],
        title: "Share"
      },
      {
        data: [{value: manifest.feedback}],
        title: "Feedback"
      },
      {
        data: [{value: manifest.review}],
        title: "Review"
      },
      {
        data: [{value: manifest.pmi}],
        title: "PMI"
      },
      {
        data: [{value: manifest.knowledgeareas}],
        title: "PMP/CAPM KNowledge Areas"
      },
    ];

    return ( <SectionList style = {styles.container}
        renderItem = {this._renderItem}
        renderSectionHeader = {this._renderSectionHeader}
        stickySectionHeadersEnabled = {true}
        keyExtractor = {  this._keyExtractor}
        ListHeaderComponent = {ListHeader}
        sections = {sections}/>
      );
  }

  _keyExtractor = (item, index) => index;

  _renderSectionHeader = ({ section }) => {
    return <SectionHeader title={section.title} / > ;
  };

  _handleOnPress = (item) => {
    const {
        manifest
    } = Constants;

    console.log(item.value);
    switch (item.value) {
      case 'PMP/CAPM Review Quick Reference':
        WebBrowser.openBrowserAsync("https://www.amazon.com/PMP-CAPM-Exam-Quick-Reference-ebook/dp/B074D68L3D");
        break;
      case 'About Us':
        Alert.alert("PMP Version: "+manifest.version);
        break;
      case 'Share PMP/CAPM Review Guide with Friends':
        Linking.openURL('mailto:somethingemail@gmail.com?subject=abcdefg&body=bodyPMPShreyas');
        break;
      case 'Share your Feedback':
        Linking.openURL('mailto:somethingemail@gmail.com?subject=abcdefg&body=bodyPMPShreyas');
        break;
      case 'Review us on App Store':
        WebBrowser.openBrowserAsync("www.google.com");
        break;
      case 'Apply to PMI':
        WebBrowser.openBrowserAsync("https://www.pmi.org/certifications/types/project-management-pmp");
        break;
      case 'Processes and Knowledge Areas':
        WebBrowser.openBrowserAsync("https://pmpguide-b8d72.firebaseapp.com/project_mgmt_framework.html");
    }
  };

  _renderItem = ({item}) => {
      return (
        <SectionContent>
          <Text style = {styles.sectionContentText} onPress={() => this._handleOnPress(item)}>{item.value}</Text>
        </SectionContent>
      );
    };
}

const ListHeader = () => {
  const {
      manifest
  } = Constants;

  return (
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
  );
};

const SectionHeader = ({title}) => {
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
};

const SectionContent = props => {
  return (
    <View style={styles.sectionContentContainer}>{props.children}</View>
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
  sectionHeaderContainer: {
      backgroundColor: '#fbfbfb',
      paddingVertical: 7,
      paddingHorizontal: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#ededed',
  },
  sectionHeaderText: {
      fontSize: 15,
      fontWeight: 'bold',
  },
  sectionContentContainer: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingHorizontal: 15,
  },
  sectionContentText: {
      fontSize: 15,
      color: 'blue',
      textDecorationLine:'underline',
  },
  nameText: {
      fontWeight: '600',
      fontSize: 18,
  },
  slugText: {
      color: '#a39f9f',
      fontSize: 14,
      backgroundColor: 'transparent',
  },
  descriptionText: {
      fontSize: 14,
      marginTop: 6,
      color: '#4d4d4d',
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
