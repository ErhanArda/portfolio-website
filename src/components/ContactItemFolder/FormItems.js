import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import Links from "./Links"

function onChange(value) {
    console.log("Captcha value:", value);
}

const FormItems = () => {
    return (
        <Container>
            <h1>Contact</h1>
            <Form>
                <Row>
                    <Col xs="6"><FormGroup>
                        <Label for="text">Name</Label>
                        <Input type="text" name="text" id="text" placeholder="Name" />
                    </FormGroup></Col>
                    <Col xs="6">  <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup></Col>
                </Row>

                <FormGroup>
                    <Label for="exampleEmail">Subject</Label>
                    <Input type="text" name="Subject" id="exampleEmail" placeholder="Subject" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Message" />
                </FormGroup>

                <FormGroup>
                <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
            <Links />
        </Container>
    )
}

export default FormItems


