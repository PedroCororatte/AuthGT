import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';

const bg = require('./resurces/girl.jpg')

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={bg} style={styles.bg} resizeMode='cover'>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>AuthGT</Text>
            <View>
              <TextInput style={styles.input} placeholder='Email' placeholderTextColor='grey' />
              <TextInput style={styles.input} placeholder='Password' placeholderTextColor='grey' />
              <View style={styles.bottom}>
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
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


