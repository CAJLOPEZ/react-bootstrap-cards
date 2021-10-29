import React from 'react'

function Card({title, imageSource, url}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imageSource} alt=""/>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsum numquam quaerat aut voluptatem, repellat dolores iure asperiores porro, incidunt labore perspiciatis, 
                vitae saepe sit. Eos ratione iste suscipit quisquam veniam.</p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank">
                    Go to this website 
                </a>
            </div>
        </div>
    )
}

export default Card
