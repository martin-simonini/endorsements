import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form } from 'react-bootstrap';


class StudentPilotAdditionalInfo extends Component{

    handleChange = ({target: {value}}) =>{
        console.log("value: "+value);
        // this.props.handleChange({name: "tsa_info", value: value});
    }

    render() {
        //List of endorsement ids associated with student pilots to check if add. info needs to be displayed.
        const student_pilot_endorsements = ["A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13"];

        if(this.props.endorsements.some(i => student_pilot_endorsements.includes(i)))
        {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Student Pilot Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form>
                            {this.props.endorsements.includes("A3")&&
                            <Form.Group as={Col} controlId="A3_addInfo">
                                <Form.Label>Pre-solo aeronautical knowledge aircraft make and model: </Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="A1Input"
                                        onChange={this.handleChange} //TODO: Handle user input
                                        placeholder="e.g. 'Cessna 172'"
                                        className="w-100"
                                    />
                                    <Form.Check
                                        name="universal_make_and_model"
                                        label="Use for all student pilot endorsements"
                                        className="pr-5"
                                        //TODO: have make and model fill for all student pilot endorsements
                                    />
                            </Form.Group>
                            }

                        </Form>
                    </Row>
                </>
            )
        }else
            return null;
    }
}

export default StudentPilotAdditionalInfo;