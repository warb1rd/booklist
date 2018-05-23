import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
// maps over an array of books and for each book in the array show the book title
	renderList(){
		return this.props.books.map((book) => {
			return(
					<li key={book.title} className="list-group-item"></li>
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

function mapStateToProps(state){                        // Take app state as an argument and whatever gets returned will show up as props inside booklist container
  return {
    books: state.books                                  // Glue between react and redux. This return will show up as props
  }
}

export default connect(mapStateToProps)(BookList)           

//Container or smart components that have direct connection to state managed by redux (react-redux library - forms bridge between react and redux)

// state contains array of books and active book
//Containers are link between redux and react done with mapsStateToProps function