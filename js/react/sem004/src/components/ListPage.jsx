import React from 'react'
import { Link } from 'react-router-dom'

export const ListPage = ({books}) => {

    return (
        <ul>
            {books.map(book => <li style={{listStyle: 'none'}} key={book.id}>
                <Link to={`/list/${book.id}`}>
                {book.title}
                </Link>
                </li>)}
        </ul>
    )

}
