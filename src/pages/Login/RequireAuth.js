import React from 'react';
import { Toast } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Modal from '../SignUp/Modal';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if (loading) {
        return <p>Loading.....</p>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if (!user.emailVerified) {
    //     return <div className='text-center mt-5'>
    //         <h3 className='text-danger'>Your Email is not verified!!</h3>
    //         <h5 className='text-success'> Please Verify your email address</h5>
    //         <button
    //         className='btn btn-primary'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 Toast('Sent email');
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
    //         <Modal></Modal>
    //     </div>
    // }

    return children;
};

export default RequireAuth;