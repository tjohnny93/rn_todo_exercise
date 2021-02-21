import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/index';
import { combineReducers } from 'redux';

const initialState = [
  {
    id: 1,
    task: '리액트 네이티브 공부하기',
    done: false,
  },
  {
    id: 2,
    task: '타입스크립트..강의 듣기..',
    done: true,
  },
  {
    id: 3,
    task: '화가 난다..',
    done: false,
  },
  {
    id: 4,
    task: '리덕스 아리쏭..',
    done: true,
  },
  {
    id: 5,
    task: '어렵다',
    done: false,
  },
];

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case REMOVE_TODO:
      return state.filter((__, idx) => action.payload !== idx);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (action.payload === todo.id) {
          let copy = Object.assign({}, todo);
          copy.done = !todo.done;
          return copy;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export const AllReducers = combineReducers({
  todoReducers,
});
