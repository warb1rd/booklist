import { combineReducers } from 'redux';
import BooksReducer from './reducers_books.js';
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
 