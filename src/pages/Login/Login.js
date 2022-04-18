import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
        navigate('/');
    }

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleError) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (googleLoading) {
        return <p>Loading...</p>;
      }
      if (googleUser) {
        navigate('/');
      }

    return (
        <div className='container w-50 my-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button> <br />
                <p className='my-2'>New to Genius Car? <Link to="/signup" className='text-primary pe-auto text-decoration-none' >Please Sign Up</Link> </p>
                
            </Form>

            <span>OR</span> <br />
            <Button onClick={() => signInWithGoogle()} variant="light" type="submit">
            <img style={{ 'height': "25px"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" srcset="" /> Sign In with Google
                </Button> <br />
        </div>
    );
};

export default Login;