import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

import {aircraft_make_and_model} from "../resources/Endorsements_Data";
import { Row, Col, Form } from 'react-bootstrap';


class StudentPilotAdditionalInfo extends Component{

    state = {
        /*We need a state variable so that the DatePicker can show the selected date. But the value in student info needs
        * to be formatted differently than the default.*/
        XcDate: null,
        leaveBlank: false
    }
    /*
    * 2/13/2021 - Right now we will not be implementing the ability to set different aircraft types for different
    * endorsements. It adds too much complexity and is a function unlikely to be used. We may re-visit this idea in later
    * version.
    * ------------------------------------------------------------------------------------------------------------------
    * This method handles changes to the checkboxes that set "universal" values.
    * This way users can enter 'make and model' (or other values) once without repeating.
    */
    /*handleUniversalChanges = ({target: {name,value}}) =>{
        if(name === "universal_make_and_model"){
            let newValue = (value === "on");
            this.setState({makeModel: newValue});
            //_TODO: push universal change to App.js so all make and model in student pilot object gets updated.
        }
    }*/

    /*Handles date changes. Needed to be handled separately from the other states since we have to update local state var.*/
    DateChangeHandler = (date) =>{
        this.setState({XcDate: date});
        this.props.handleChange({target: {name:"A10_date", value: moment(date).format("MM/DD/YYYY")}});
    }

    /*Updates the "leave blank" button. When selected it should disable the date selection and push the default value
    * to App.js*/
    leaveBlankHandler = () =>{
        if(!this.state.leaveBlank) { //Going from not clicked to clicked (User wants to disable date selection)
            this.props.handleChange({target: {name: "A10_date", value:"________________________"}});
            this.setState(prevState => ({XcDate: null, leaveBlank: !prevState.leaveBlank}));
        }
        else //Enable date selection. Only needs to make the date button clickable.
            this.setState(prevState => ({leaveBlank: !prevState.leaveBlank}));
    }

    render() {
        //List of endorsement ids associated with student pilots to check if add. info needs to be displayed.
        const student_pilot_endorsements = ["A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13"];

        if(this.props.endorsements.some(i => student_pilot_endorsements.includes(i)))
        {
            return (
                <>
                    <Row className="mb-12">
                        <h2 className="float-left">Student Pilot Endorsement - Additional Information</h2>
                    </Row>
                    <Form>
                        {this.props.endorsements.some(i => aircraft_make_and_model.includes(i))&&
                        <Form.Group as={Row} inline controlId="makeAndModel">
                            <Form.Label column md={4}>Aircraft Make and Model: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="makeModel"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'Cessna 172'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                                {/*<Form.Check
                                    name="universal_make_and_model"
                                    label="Use for all student pilot endorsements"
                                    className="pr-5"
                                    onChange={this.handleUniversalChanges}
                                />*/}
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A9")&&
                        <Form.Group as={Row} inline controlId="soloXC">
                            <Form.Label column md={4}>Aircraft Category: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="category"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'Single-Engine Land'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A5")&&
                        <Form.Group as={Row} inline controlId="nightAirport">
                            <Form.Label column md={4}>[A5] Airport for solo night flight: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A5_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KCBF'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A8")&&
                        <Form.Group as={Row} inline controlId="within25">
                            <Form.Label column md={4}>[A8] Airport for solo takeoffs and landings within 25 NM: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A8_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KRDK'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A8")&&
                        <Form.Group as={Row} inline controlId="within25Limitations">
                            <Form.Label column md={4}>[A8] Limitations for solo takeoffs and landings within 25 NM: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A8_limitations"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A10") &&
                        <Form.Group as={Row} inline controlId="soloXCDep">
                            <Form.Label column md={4}>[A10] Solo cross-country flight departure airport: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A10_origin_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KCBF'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A10") &&
                        <Form.Group as={Row} inline controlId="soloXCRoute">
                            <Form.Label column md={4}>[A10] Solo cross-country route: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A10_route"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KLNK - KOLU'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A10") &&
                        <Form.Group as={Row} inline controlId="soloXCLandings">
                            <Form.Label column md={4}>[A10] Solo cross-country landings at: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A10_landings"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KCBF,KLNK,KOLU'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A10") &&
                        <Form.Group as={Row} inline controlId="soloXCDate">
                            <Form.Label column md={4}>[A10] Solo cross-country flight date: </Form.Label>
                            <Col md={6}>
                                <DatePicker
                                    selected={this.state.XcDate}
                                    onChange={date => this.DateChangeHandler(date)}
                                    dateFormat="MM/dd/yyyy"
                                    disabled={this.state.leaveBlank}
                                />
                            </Col>
                            <Col md={2}>
                                <Form.Check name="leaveBlank" label="Leave Blank" className="pr-5" onChange={this.leaveBlankHandler} checked={this.state.leaveBlank}/>
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A10")&&
                        <Form.Group as={Row} inline controlId="XCLimitations">
                            <Form.Label column md={4}>[A10] Limitations for solo cross-country flight: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A10_limitations"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A11")&&
                        <Form.Group as={Row} inline controlId="repeatXC">
                            <Form.Label column md={4}>[A11] Repeated solo cross-country less than 50 NM airport: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A11_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KHNR'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A11")&&
                        <Form.Group as={Row} inline controlId="RepeatLimitations">
                            <Form.Label column md={4}>[A11] Limitations for solo cross-country flight less than 50 NM: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A11_limitations"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A12") &&
                        <Form.Group as={Row} inline controlId="soloBravo">
                            <Form.Label column md={4}>[A12] Solo flight in Class B Airspace: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A12_classB"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'Kansas City'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A12")&&
                        <Form.Group as={Row} inline controlId="classBLimit">
                            <Form.Label column md={4}>[A12] Limitations for solo flight in Class B Airspace: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A12_limitations"
                                    onChange={this.props.handleChange}
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A13") &&
                        <Form.Group as={Row} inline controlId="soloBravoAirport">
                            <Form.Label column md={4}>[A13] Solo flight in Class B Airports: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A13_airport"
                                    onChange={this.props.handleChange}
                                    placeholder="e.g. 'KMKC,KGPH,KMCI'"
                                    className="w-100"
                                    inline
                                />
                            </Col>
                        </Form.Group>
                        }
                        {this.props.endorsements.includes("A13")&&
                        <Form.Group as={Row} inline controlId="BLimitations">
                            <Form.Label column md={4}>[A13] Limitations for solo flight in Class B Airspace: </Form.Label>
                            <Col md={8}>
                                <Form.Control
                                    type="text"
                                    name="A13_limitations"
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

export default StudentPilotAdditionalInfo;