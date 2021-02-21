import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';

export default function AddTodo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleTodo = text => {
    setTodo(text);
  };

  const submitTodo = () => {
    let todoAction = {
      id: Date.now(),
      task: todo,
      done: false,
    };
    dispatch(addTodo(todoAction));
    setTodo('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'ehight}'}
      style={styles.typeTodo}
    >
      <TextInput
        style={styles.input}
        placeholder={'Type Todo'}
        onChangeText={text => handleTodo(text)}
        value={todo}
      ></TextInput>
      <TouchableOpacity onPress={() => submitTodo()}>
        <View style={styles.addBtnWrapper}>
          <Text style={styles.addBtn}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  typeTodo: {
    flex: 1,
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    // paddingRight: 35,
    // marginTop: 15,
    // marginBottom: 30,
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 30,
    width: 300,
    fontSize: 18,
    marginRight: 26,
  },
  addBtnWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  addBtn: {
    fontSize: 34,
    fontWeight: '900',
    color: 'skyblue',
  },
});
