import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form } from 'react-bootstrap';


class StudentPilotAdditionalInfo extends Component{

    state = {
        makeModel: false
    }

    /*
    * This method handles changes to the checkboxes that set "universal" values.
    * This way users can enter 'make and model' (or other values) once without repeating.
    */
    handleUniversalChanges = ({target: {name,value}}) =>{
        if(name === "universal_make_and_model"){
            let newValue = (value === "on");
            this.setState({makeModel: newValue});
            //TODO: push universal change to App.js so all make and model in student pilot object gets updated.
        }
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
                                        name="A3_makeModel"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'Cessna 172'"
                                        className="w-100"
                                    />
                                    <Form.Check
                                        name="universal_make_and_model"
                                        label="Use for all student pilot endorsements"
                                        className="pr-5"
                                        onChange={this.handleUniversalChanges}
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