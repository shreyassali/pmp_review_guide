import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';

export default class ReferenceLinksScreen extends React.Component {
    render() {
        return (
      <View>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressDocs}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
                <FontAwesome name="book" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Top 5 PMP Books 
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressSlack} >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer} >
              <Ionicons name="ios-bookmarks" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer} >
              <Text style={styles.optionText}>
              PMP-Free-Resources 
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressForums}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
                <MaterialIcons name="question-answer" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Top PMP-Exam-Simulator
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc ', false)}
          onPress={this._handlePrepCast}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialIcons name="assignment" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Prep Cast 
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handleFreeExam}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialIcons name="assignment" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                PMP Exam for Free 
              </Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handleExamQuestions}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialIcons name="question-answer" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                PMP Exam Questions 
              </Text>
            </View>
          </View>
        </Touchable>


        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePracticeQuestions}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <MaterialIcons name="question-answer" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                3500+ PMP Practice Questions
              </Text>
            </View>
          </View>
        </Touchable>


        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePMGuide}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="md-document" size={27} color="#8e6de3" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Easy PM Guide 
              </Text>
            </View>
          </View>
        </Touchable>

      </View>
    );
  };

  _handlePressDocs = () => {
    WebBrowser.openBrowserAsync('https://www.whizlabs.com/blog/best-pmp-certification-books-2016-top-5-pmp-certification-books/');
  };

  _handlePressSlack = () => {
    WebBrowser.openBrowserAsync('http://www.pmstudy.com/PMP-Free-Resources.asp');
  };

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync('http://www.pm-exam-simulator.com/articles/38-my-top-10-recommended-web-sites-for-free-pmp-exam-sample-questions-for-your-pmp-exam-prep');
  };

  _handlePrepCast = () => {
    WebBrowser.openBrowserAsync('https://www.project-management-prepcast.com/pmp-practice-exam-questions-sample-test');
  };

  _handleFreeExam = () => {
    WebBrowser.openBrowserAsync('http://pmpexamforfree.com/');
  };

  _handleExamQuestions = () => {
    WebBrowser.openBrowserAsync('http://206-free-pmp-exam-questions.blogspot.com/');
  };

  _handlePracticeQuestions = () => {
    WebBrowser.openBrowserAsync('http://www.justgetpmp.com/2013/05/999-free-pmp-exam-practice-questions.html');
  };

  _handlePMGuide = () => {
    WebBrowser.openBrowserAsync('http://easypmguide.com/free-pmp-sample-questions-and-pmp-practice-exam-questions/');
  };
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 15,
        },
        optionsTitleText: {
            fontSize: 16,
            marginLeft: 17,
            marginTop: 9,
            marginBottom: 10,
        },
        optionIconContainer: {
            marginRight: 9,
        },
        option: {
            backgroundColor: '#fdfdfd',
            paddingHorizontal: 15,
            paddingVertical: 15,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#EDEDED',
        },
        optionText: {
            fontSize: 15,
            marginTop: 1,
        },
    });
