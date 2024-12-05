import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View , SafeAreaView} from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import LoginPage from './LoginPage';
import Footer from './Footer';

import Header from './Header';
import RegisterPage from './RegisterPage';
import VerificationPage from './VerificationPage';
import Notification from './Notification';
import Settings from './Settings';
import Profile from './Profile';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-violet-100">
      <Header/>
      <View className="flex-1">
        <LoginPage/>
      </View>
      <Footer/>
    </SafeAreaView>
  );
}
