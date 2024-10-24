import React from 'react'

export const ImageList = ({ images }) => {
    return (
        <div>
            {images.map(image => (
                <div key={image.id}>
                    <img src={image.urls.small} alt={image.description} />
                </div>
            ))}
        </div>
    )
}
