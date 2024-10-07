import React from 'react'
import { Link } from 'react-router-dom'

export const ArticlesList = ({ articles }) => {
    return (
        <div>
            <h2>Articles list:</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
