import React, { Component } from 'react';


class Booklist extends Component{
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
export default Booklist

//Container or smart components that have direct connection to state managed by redux (react-redux library - forms bridge between react and redux)