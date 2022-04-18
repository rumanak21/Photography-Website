import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <h6 className='text-center text-secondary'>Copyright © {year} | Powered by WPG-Roman  </h6>
        </div>
    );
};

export default Footer;