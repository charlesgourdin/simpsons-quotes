import React from 'react';
import './QuoteCard.css'

function QuoteCard ({quote, image, character}) {
    return(
    <figure className="QuoteCard">
        <img
        src={image}
        alt={character}
        />
        <figcaption>
            <blockquote>
            {quote}
            </blockquote>
            <cite>{character}</cite>
        </figcaption>
    </figure>
    )
}


export default QuoteCard;