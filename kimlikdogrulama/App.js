import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Header from './src/header.js';
import LoginForm from './src/LoginForm.js';
import CardSection from './src/CardSection.js';
import Spinner from './src/Spinner';
import Button from './src/button.js';

class App extends Component {
  state = {loggedIn: null};
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDFm2Df-nxBgWocI0hhJvpJlYhm0eLtvp0',
      authDomain: 'kimlikdogrulama-3ed09.firebaseapp.com',
      databaseURL: 'https://kimlikdogrulama-3ed09.firebaseio.com',
      projectId: 'kimlikdogrulama-3ed09',
      storageBucket: 'kimlikdogrulama-3ed09.appspot.com',
      messagingSenderId: '524223403682',
      appId: '1:524223403682:web:598dad92cc68cd566a29fb',
      measurementId: 'G-7DGD2DTQXL',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  clickLogOut() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogOut.bind(this)}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;

      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
        break;
    }
  }
  
  render() {
    return (
      <View>
        <Header headerText="KimlikDogrulama" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
