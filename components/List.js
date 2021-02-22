import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, changeStatus } from '../actions/';
// import Todo from './Todo';

export default function List() {
  const todoList = useSelector(state => state.todoReducers);

  const dispatch = useDispatch();
  const listEndref = useRef(null);

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevTodoList = usePrevious(todoList) || [];

  const scrollToBottom = () => {
    listEndref.current.scrollToEnd({ animated: true });
  };

  const active = list => {
    let count = 0;
    list.map(item => {
      !item.done && (count += 1);
    });
    return count;
  };

  useEffect(() => {
    if (todoList.length > prevTodoList.length) {
      scrollToBottom();
    }
  }, [todoList, prevTodoList]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Todo List</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.titleInfo}>
            Active Task Total: {active(todoList)}
          </Text>
          <Text style={styles.titleInfo}>List Total: {todoList.length}</Text>
        </View>
      </View>

      <ScrollView style={styles.listContainer} ref={listEndref}>
        {todoList.length > 0 &&
          todoList.map((todo, idx) => {
            return (
              <View key={todo.id} style={styles.taskContainer}>
                <TouchableOpacity
                  onPress={() => dispatch(changeStatus(todo.id))}
                >
                  <Text style={todo.done ? styles.taskDone : styles.task}>
                    {todo.task}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(removeTodo(idx))}>
                  <View style={styles.deleteBtnWrapper}>
                    <Text style={styles.deleteBtn}>X</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
  },

  listContainer: {
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
  },

  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'skyblue',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  titleInfo: {},

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: 'skyblue',
    borderStyle: 'solid',
    borderWidth: 1.5,
  },

  checkBox: {},

  task: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },

  taskDone: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    textDecorationColor: 'black',
  },

  deleteBtnWrapper: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'skyblue',
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: 5,
  },

  deleteBtn: {
    color: 'skyblue',
    fontSize: 22,
    fontWeight: '900',
  },
});
