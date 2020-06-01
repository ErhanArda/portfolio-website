import React from 'react'
// import ReCAPTCHA from "react-google-recaptcha";
import { Formik } from 'formik'
import * as Yup from "yup"
import axios from 'axios';
import { Button, Form, FormGroup, FormFeedback, Label, Input, Row, Col, Container } from 'reactstrap';
import Links from "./Links"

// function onChange(value) {
//     console.log("Captcha value:", value);
// }


const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is a required field"),
    email: Yup.string().required("Email is a required field"),
    subject: Yup.string().required("Subject is a required field"),
    message: Yup.string().min(2, "You can't enter less than 2 characters")
});



const FormItems = () => {
    return (
        <Container>
            <h1>Contact</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    sent:false,
                    buttonText:'SendMessage'
                }}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs="12" md="6"><FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        invalid={errors.name}

                                    />
                                    {
                                        errors.name && <FormFeedback>{errors.name}</FormFeedback>
                                    }
                                </FormGroup>
                                </Col>
                                <Col xs="12" md="6">
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            invalid={errors.email}
                                            />
                                            {
                                                errors.email && <FormFeedback>{errors.email}</FormFeedback>
                                            }
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="exampleEmail">Subject</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    invalid={errors.subject}
                                    />
                                    {
                                        errors.subject && <FormFeedback>{errors.subject}</FormFeedback>
                                    }
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleText">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    value={values.message}
                                    onChange={handleChange}
                                    invalid={errors.message}
                                    />
                                    {
                                        errors.message && <FormFeedback>{errors.message}</FormFeedback>
                                    }
                            </FormGroup>
                            <FormGroup>
                            </FormGroup>
                            <Button color="primary">{values.buttonText}</Button>
                        </Form>
                    )}
            </Formik>
            <Links />
        </Container >
    )
}

export default FormItems

