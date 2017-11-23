import firebase from 'firebase';
import Logger from '../common/Logger';
import Environment from '../common/Environment';

/**
 * Firebase for following backend services:
 * - Authentication - Signup, Login, Logout
 * - Database - Cloud Database
 * - Storage - Cloud storage
**/
class Firebase {

    // Initialize firebase using config from Environment
    static initialize() {
      // Ensure firebase is initalized only once.
      if(!Firebase.isInitialized) {
        Logger.debug('Initializing Firebase');
        firebase.initializeApp(Environment.firebaseConfig);
        // Ignore Android Firebase Warning
        console.ignoredYellowBox = ['Setting a timer'];
        Firebase.isInitialized = true;
      }
    }
}

Firebase.isInitialized = false;

module.exports = Firebase;
