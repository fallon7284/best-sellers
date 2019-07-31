import React from 'react'
import { timesKey } from '../secrets'
import axios from 'axios'
import SingleBook from './SingleBook'
import BookList from './BookList';

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            books: [],
            selectedBook: null,
            date: '',
            searchTerm: '',
            filter: '',
            bookCategory: 'hardcover-fiction',
        }
        this.setBook = this.setBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchBooks = this.fetchBooks.bind(this)
    }

    componentDidMount(){
        this.fetchBooks('current')
    }

    async fetchBooks(date){
        const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/${date}/${this.state.bookCategory}.json?api-key=${timesKey}`)
        console.log(data)
        this.setState({books: data.results.books, date: data.results.bestsellers_date})
    }

    handleChange(e){
        console.log(this)
        this.setState({date: `${e.target.value}`})
    }

    handleSubmit(e){
        e.preventDefault()
        this.fetchBooks(this.state.date)
    }


    setBook(i){
        if (!this.state.selectedBook){
            this.setState({selectedBook: this.state.books[i]})
        } else {
            this.setState({selectedBook: null})
        } 
    }


    render(){
        return (
            <div className="home">
                {this.state.selectedBook 
                ? 
                <SingleBook 
                    book={this.state.selectedBook} 
                    setBook={this.setBook}
                    scroll={this.state.scrollPosition}
                /> 
                : 
                <div >{`These are the NYT bestsellers for the week of ${this.state.date}`}
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder={this.state.date} onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    <BookList
                        className="book-list"
                        setBook={this.setBook}
                        books={this.state.books}
                    />
                </div>}
            </div>
        )
    }
}

