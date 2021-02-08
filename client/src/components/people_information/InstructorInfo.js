import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

class InstructorInfo extends Component{

    render() {
        return(
            <>
                <Form>
                    <Form.Group className="mb-3">
                        <h2>Instructor Information</h2>
                    </Form.Group>
                    <Form.Group as={Row} controlId="instructorInfo">
                        <Form.Label column sm="5">CFI Number: </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" name="cfiNumber" onChange={this.props.handleChange} placeholder="1234567CFI" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="expirationDate">
                        <Form.Label column sm="5">Expiration Date: </Form.Label>
                        <Col sm="7">
                            <Form.Control type="date"  name="expDate" onChange={this.props.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="SignedDate">
                        <Form.Label column sm="5">Signed Date: </Form.Label>
                        <Col sm="7">
                            <Form.Control type="date"  name="signedDate" onChange={this.props.handleChange}  />
                        </Col>
                    </Form.Group>

                </Form>
            </>
        );
    }
}

export default InstructorInfo;