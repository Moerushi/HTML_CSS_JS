import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const DetailPage = ({books}) => {
    
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = books.find(book => book.id === parseInt(bookId, 10));

    function goBack() {
        return navigate(-1);
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <button onClick={goBack}>Backward</button>
        </div>
    )
}
