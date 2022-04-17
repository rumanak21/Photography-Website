import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'
import banner4 from '../../../images/Banner/banner4.jpg'



const Banner = () => {
    return (
        

            <Carousel fade>
                <Carousel.Item>
                    <img
                    style={{ 'height': "700px" }}
                        className="d-block w-100 img-thumbnail"
                        src={banner1}
                        alt="PhotoGrapher Roman"
                    />
                    <Carousel.Caption>
                        <h3 className=' text-light fs-1 fw-bold'>PhotoGrapher Roman</h3>
                        <p className='text-light fs-3 fw-bold'>I'm passionate to make your memories..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ 'height': "700px" }}
                        className="d-block w-100 "
                        src={banner2}
                        alt="Wedding PhotoGraphy"

                    />

                    <Carousel.Caption>
                        <h3 className=' text-danger fs-1 fw-bold'>Wedding PhotoGraphy</h3>
                        <p className='text-danger fs-3 fw-bold'>You can hire me as a wedding photographer.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{ 'height': "700px" }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Anniversary Photography"
                    />

                    <Carousel.Caption>
                        <h3 className=' text-secondary fs-1 fw-bold'>Anniversary Photography</h3>
                        <p className='text-secondary fs-3 fw-bold'>I will make your memories at reasonable prices..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{ 'height': "700px" }}
                        className="d-block w-100"
                        src={banner4}
                        alt="Honeymoon Photography"
                    />

                    <Carousel.Caption>
                        <h3 className='text-light fs-1 fw-bold'>Honeymoon Photography</h3>
                        <p className='text-light fs-3 fw-bold'>I am highly dedicated to client satisfaction..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
     

    );
};

export default Banner;