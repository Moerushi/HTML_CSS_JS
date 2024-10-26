import React from 'react'
import { Breadcrumb } from '../Breadcrumbs/Breadcrumb'

export const PageTitle = ({ name }) => {
    return (
        <div className="top-head center">
            <h1 className="top-head__heading">{name}</h1>
            <Breadcrumb />
        </div>


    )
}