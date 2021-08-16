import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, SafeAreaView, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import firebase from './Firebase/Config'
const bg = require('./resurces/girl.jpg')

export default function App() {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const EmailSignUp = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  const test = () => console.warn(Email);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>AuthGT</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='grey'
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='grey'
                onChangeText={text => setPassword(text)}
              />
              <View style={styles.bottom}>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={EmailSignUp}>
                    <Text style={styles.buttonText}>SignUp</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Forgot password?</Text>
                  <TouchableOpacity>
                    <Text style={styles.textRecovery}>Recover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


