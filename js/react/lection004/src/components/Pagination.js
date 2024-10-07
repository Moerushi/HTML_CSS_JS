import React from 'react'
import { Link } from 'react-router-dom'

export const Pagination = ({ totalProducts, productsPerRage, currentPage }) => {
    const totalPages = Math.ceil(totalProducts / productsPerRage);
    return (
        <div>
            {Array.from({ length: totalPages }, (_, index) => (
                <Link key={index} to={`/page/${index + 1}`}>
                    {index + 1}
                </Link>
            ))}
        </div>
    );
}
