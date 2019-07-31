import React from 'react'
import { FaAmazon } from 'react-icons/fa'

export default ({book, setBook, id}) => {
    const { title, author, description, book_image, buy_links } = book
    
    return (
        <div className="thumb" onClick={() => setBook(id)}>
            
            <div className="thumb-head">
                <div>
                    {title}
                </div>
                <div className="author">
                    {author}
                </div>
            </div>
            
            <div className="thumb-body">
                <div className="left">
                    <img 
                        className="thumb-image" 
                        src={book_image} 
                        alt={`Cover of ${title} by ${author}`}
                    ></img>
                </div>
                <div className="right">
                    {description}
                    <a className="amazon" href={buy_links[2].url} alt='link to purchase on amazon.com'><FaAmazon/></a>
                </div>   
            </div>
        </div>
    )
}