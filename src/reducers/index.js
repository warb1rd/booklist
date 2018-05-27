import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer; 

//action creater is a function that returns an object. 