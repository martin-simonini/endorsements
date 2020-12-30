import React, { Component } from 'react';
// import axios from 'axios';
//import { saveAs } from 'file-saver';

import { Row, Col, Form } from 'react-bootstrap';

class StudentInfo extends Component{

    render() {
        return(
            <>
                <Form>
                    <Form.Group className="mb-3">
                        <h2>Student Information</h2>
                    </Form.Group>
                    <Form.Group as={Row} controlId="studentInfo">
                        <Form.Label column sm="5">Student's Name: </Form.Label>
                        <Col sm="7">
                            <Form.Control type="text" name="studentName" onChange={this.props.handleChange} placeholder="John J. Doe" />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="Gender" as={Row}>
                        <Form.Label column sm="5">Gender: </Form.Label>
                        <Col sm="5">
                            <Form.Control as="select" name="gender" onChange={this.props.handleChange}>
                                <option  value="[he or she]"></option>
                                <option value="he">Male</option>
                                <option value="she">Female</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default StudentInfo;