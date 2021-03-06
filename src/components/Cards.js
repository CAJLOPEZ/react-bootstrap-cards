import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Kamy Linkedin',
        image: image1,
        url: 'https://www.linkedin.com/in/camila-jlopez/',
        text: 'Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.'
    },
    {
        id: 2,
        title: 'Kamy Github',
        image: image2,
        url: 'https://github.com/CAJLOPEZ'
    },
    {
        id: 3,
        title: 'Kamy Instagram',
        image: image3,
        url: 'https://instagram.com/mrskamylee'
    },
]

function Cards(){
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}> 
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards