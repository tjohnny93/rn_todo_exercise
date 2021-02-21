// import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator, // 로딩바 (사이즈 조절가능)
  TextInput,
  TouchableOpacity, // onPress에 사용되는
  Pressable, // onPressIn, onPressOut, onLongPress
  Button, // 스타일이 먹혀있는 상태라 더구림
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AllReducers } from './reducers/';
import List from './components/List';
import AddTodo from './components/AddTodo';

export default function App() {
  const store = createStore(AllReducers);
  const listLenght = store.getState().todoReducers.length;

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <List />
        <AddTodo />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
