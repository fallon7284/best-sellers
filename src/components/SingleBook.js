import React from 'react'

export default (props) => {
    console.log(props.scroll)
    return (
        <div onClick={props.setBook}>
            <h1>{props.book.title}</h1>
            <h3>{props.book.author}</h3>
            <p>{props.book.description}</p>
            <img src={props.book.book_image} alt=''></img>
        </div>
    )
}