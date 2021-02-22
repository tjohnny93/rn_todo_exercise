// import 'react-native-gesture-handler';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AllReducers } from './reducers/';
import List from './components/List';
import AddTodo from './components/AddTodo';

export default function App() {
  const store = createStore(AllReducers);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <List />
      </SafeAreaView>
      <AddTodo />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
