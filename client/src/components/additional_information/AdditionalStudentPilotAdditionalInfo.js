import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form } from 'react-bootstrap';


class AdditionalStudentPilotAdditionalInfo extends Component{

    render() {
        //List of endorsement ids associated with student pilots to check if add. info needs to be displayed.
        const additional_student_pilot_endorsements = ["A15","A16"];

        if(this.props.endorsements.some(i => additional_student_pilot_endorsements.includes(i)))
        {
            return (
                <>
                    <Row className="mb-12">
                        <h2 className="float-left">Additional Student Pilot Endorsement - Additional Information</h2>
                    </Row>
                    <Form>
                        {this.props.endorsements.includes("A15")&&
                        <Form.Group as={Row} inline controlId="classBCD">
                            <Form.Label column md={4}>[A15] Name of Class B, C, or D airspace: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A15_airspace"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A15") &&
                        <Form.Group as={Row} inline controlId="A15Airport">
                            <Form.Label column md={4}>[A15] Airport: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A15_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KGPH'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A15") &&
                        <Form.Group as={Row} inline controlId="A15Limit">
                            <Form.Label column md={4}>[A15] Solo flight in Class B, C, and D Airspace Limitations: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A15_limitations"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A16") &&
                        <Form.Group as={Row} inline controlId="A16Airport">
                            <Form.Label column md={4}>[A16] Airport with control tower: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A16_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KMKC'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A16") &&
                        <Form.Group as={Row} inline controlId="A16Limit">
                            <Form.Label column md={4}>[A16] Solo flight to control tower limitations: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A16_limitations"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                    </Form>
                </>
            )
        }else
            return null;
    }
}

export default AdditionalStudentPilotAdditionalInfo;