import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import serviceImg1 from '../../../images/Services-img/s-img-1.jpg'
import serviceImg2 from '../../../images/Services-img/s-img-2.jpg'
import serviceImg3 from '../../../images/Services-img/s-img-3.jpg'

const Services = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5 text-secondary text-uppercase' >My Services</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={serviceImg1} />
                    <Card.Body >
                        <CardHeader ><Card.Title className='text-secondary text-center'>Basic Package</Card.Title></CardHeader>
                        <Card.Text>
                            1 Photographer 4-6 Hours of coverage 150 - 300 Photos Digital Copies of Photos (USB) Gallery
                        </Card.Text>
                        <Card.Title className='text-center fw-bold'>Price: $700</Card.Title>
                    </Card.Body>
                    <Card.Footer >
                        <Button variant="primary">Check Out</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={serviceImg2} />
                    <Card.Body>
                        <CardHeader><Card.Title className='text-secondary text-center'>Standard Package</Card.Title></CardHeader>
                        <Card.Text>
                            1 Photographer 6-8 Hours of coverage 300 - 400 Photos Digital Copies of Photos (USB) Gallery
                        </Card.Text>
                        <Card.Title className='text-center fw-bold'>Price: $900</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Check Out</Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={serviceImg3} />
                    <Card.Body>
                        <CardHeader><Card.Title className='text-secondary text-center'>Premium Package</Card.Title></CardHeader>
                        <Card.Text>
                            1 Photographer 8-10 Hours of coverage 400 - 500 Photos Digital Copies of Photos (USB) Gallery
                        </Card.Text>
                        <Card.Title className='text-center fw-bold'>Price: $1200</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Check Out</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Services;