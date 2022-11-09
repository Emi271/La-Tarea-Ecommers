import React, { useState } from 'react'
import './Contact.css'
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
 
function Contact(){
    const [info, setInfo] = useState(null);
 
const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});
 
const formik= useFormik({
      initialValues: {
        email: '',
        name: '',
        password: '',
      },
      onSubmit: (data) => {
        setInfo(data);
      },
      validateSchema: {validateSchema}
});
 
return (
    <>
    <div className='text'><h1>Comunicate con nosotros!</h1></div>
    <div className='form'>
 
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group controlId ="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                  type="email"
                                  name="email"
                                  placeholder="Enter email"
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                  />
 
                        </Form.Group>
                        <Form.Group controlId ="formBasicName">
                             <Form.Label>Name</Form.Label>
                             <Form.Control
                                  type="text"
                                  name="name"
                                  placeholder ="Enter name"
                                  onChange ={formik.handleChange}
                                  />
                        </Form.Group>
                        <Form.Group controlId ="formBasicPass">
                             <Form.Label>Password</Form.Label>
                             <Form.Control
                                  type="password"
                                  name="password"
                                  placeholder ="Enter password"
                                  onChange ={formik.handleChange}
                                  />
                        </Form.Group>
                        <Button className='button' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
             </div>
        </>
    )
}
export default Contact