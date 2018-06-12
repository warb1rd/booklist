import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreaters} from 'redux';

class BookList extends Component{
// maps over an array of books and for each book in the array show the book title
	renderList(){
		return this.props.books.map((book) => {
			return(
					<li key={book.title} className="list-group-item">{book.title}</li>
			)
		})
	}
	render(){
		return (
			<ul className="list-group col-sm-4">
			{/* Helper function */}
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){                        								// Take app state as an argument and whatever gets returned will show up as props inside booklist container
  return {																							
    books: state.books                                  								// Glue between react and redux. This return will show up as props
  }
}

function mapDispatchToProps(dispatch){																	// Whenever selectBook is called, the result should be passed to all of the reducers
	return bindActionCreaters({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)           

//Container or smart components that have direct connection to state managed by redux (react-redux library - forms bridge between react and redux)

//State contains array of books and active book
//Containers are link between redux and react done with mapsStateToProps function