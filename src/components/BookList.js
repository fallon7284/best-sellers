import React from 'react'
import BookThumb from './BookThumb'

export default ({setBook, books}) => {
    return (
        <div className="book-list">
            {books.map((b, i) => {
                return (
                    <BookThumb book={b} key={i} id={i} setBook={setBook} />
                )
            })}
        </div>
    )
}