export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = str => {
  return {
    type: ADD_TODO,
    payload: str,
  };
};

export const removeTodo = idx => {
  return {
    type: REMOVE_TODO,
    payload: idx,
  };
};

export const changeStatus = id => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
