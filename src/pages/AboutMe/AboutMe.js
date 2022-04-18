import React from 'react';

const AboutMe = () => {
    return (
        <div className='d-lg-flex container  '>
            <img className='mb-5' style={{'height': '500px'}} src="https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" srcset="" />
            <p className='p-5 text-secondary text-center mt-5'>
            This is Roman Polach. I am Wedding Photographer. I live in California. I am a passionate photographer. I have worked on a lot of Weddings, anniversaries, and honeymoons. My first priority is client satisfaction. 
            
            </p>
        </div>
    );
};

export default AboutMe;