import React, { useState, useEffect } from 'react';
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
    todo.length > 0
      ? dispatch(addTodo(todoAction)) && setTodo('')
      : alert('Please Type Something Todo');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.typeTodo}
    >
      <View style={styles.typeBg}>
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
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  typeTodo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeBg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
    paddingHorizontal: 15,
    paddingVertical: 40,
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
