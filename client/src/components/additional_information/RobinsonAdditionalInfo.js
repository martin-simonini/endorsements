import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form } from 'react-bootstrap';

import {robinson_endorsements} from '../resources/Endorsements_Data';


class RobinsonAdditionalInfo extends Component{

    render() {

        if(robinson_endorsements.some(i => this.props.endorsements.includes(i.id)))
        {
            return (
                <>
                    <Row className="mb-12">
                        <h2 className="float-left"> Robinson R-22/R-44 Endorsement - Additional Information</h2>
                    </Row>
                    <Form>
                        {this.props.endorsements.some(i => i !== "A59" && i !== "A63")&&
                        <Form.Group as={Row} inline controlId="studentNum">
                            <Form.Label column md={4}>Pilot Number: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="certNum"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {(this.props.endorsements.includes("A59")||this.props.endorsements.includes("A63"))&&
                        <Form.Group as={Row} inline controlId="studentsCFINumInput">
                            <Form.Label column md={4}>Applicant's CFI Number: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="studentsCFINum"
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

export default RobinsonAdditionalInfo;