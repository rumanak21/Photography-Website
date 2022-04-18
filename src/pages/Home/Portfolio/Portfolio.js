import React, { useEffect, useState } from 'react';

import DisplayPortfolio from '../DisplayPortfolio/DisplayPortfolio';

const Portfolio = () => {
    const [images, setImages] = useState([])

    useEffect(()=>{
        fetch('portfolio.json')
        .then(res => res.json())
        .then(data => setImages(data))
    },[])

    return (
        <div><h2 className='text-center mb-5 text-secondary text-uppercase' >My Portfolio</h2>
        <div className=' row '>
            {images.map(image => <DisplayPortfolio
            key = {image.id}
            image = {image}
            ></DisplayPortfolio>)}
            
        </div>
        
        
        </div>
        
    );
};

export default Portfolio;