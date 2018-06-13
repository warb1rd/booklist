export function selectBook(book) {
	console.log("A book has been selected:", book.title);
	// selectBook is an Action Creator , it needs to return an action, an object with a type property
  return {
		type: 'BOOK_SELECTED',
		payload: book
  }
}

// Action always contains a type and sometimes contains payload.