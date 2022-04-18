import React from 'react';
import { Card } from 'react-bootstrap';
const DisplayPortfolio = ({image}) => {
    const {photo, name} = image
    return (
        <div className='w-25 my-3'>
            <Card className="bg-dark text-white">
            <Card.Img className=' img-thumbnail' src={photo} alt="" />
            <Card.ImgOverlay>
                <Card.Title>{name}</Card.Title>
                
                
            </Card.ImgOverlay>
        </Card>
        </div>
    );
};

export default DisplayPortfolio;