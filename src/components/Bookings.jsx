import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export const Bookings = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <Container>
                <h1>Bookings</h1>
                <Row>
                    <Col xs={6} md={4}>
                        info box here
                    </Col>
                    <Col xs={6} md={4}>
                        blank space
                    </Col>
                    <Col xs={6} md={4}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} action="https://formsubmit.co/e811f31161e285bc98d1c61c0f364443 " method="POST">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name='First Name'
                                        placeholder="First name"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name='Last Name'
                                        placeholder="Last name"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustomEmail">
                                    <Form.Label>Email</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid email address.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <Form.Label>Text Body</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        required
                                        type="text"
                                        name='Text Body'
                                        placeholder="Text body"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    label="Agree to terms and conditions"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}