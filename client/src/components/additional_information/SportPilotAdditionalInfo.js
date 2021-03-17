import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {aircraft_category, aircraft_make_and_model} from "../resources/Endorsements_Data";
import { Row, Col, Form } from 'react-bootstrap';


class SportPilotAdditionalInfo extends Component{

    state = {
        knowledgeSelected: ""
    }

    knowledgeChangeHandler = (event) => {
        if( this.state.knowledgeSelected !== event.target.name){
            this.setState({knowledgeSelected: event.target.name});
            this.props.handleChange({target: {name: "sport_knowledge_test", value: event.target.name}});
        }
    }

    render(){
        const endorsements = ["A18","A19","A20","A21","A22","A23","A24"];
        if(this.props.endorsements.some(i => endorsements.includes(i))) {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Sport Pilot Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            {this.props.endorsements.includes("A17") &&
                            <Form.Group as={Row} controlId="sport_knowledge_test">
                                <Form.Label column md="5">Airman knowledge test: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Airplane" type="radio" name="Airplane" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Airplane"}/>
                                    <Form.Check inline label="Glider" type="radio" name="Glider" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Glider"}/>
                                    <Form.Check inline label="Balloon" type="radio" name="Balloon" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Balloon"}/>
                                    <Form.Check inline label="Airship" type="radio" name="Airship" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Airship"}/>
                                    <Form.Check inline label="Powered-Parachute" type="radio" name="Powered-Parachute" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Powered-Parachute"}/>
                                    <Form.Check inline label="Weight-Shift-Control" type="radio" name="Weight-Shift-Control" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Weight-Shift-Control"}/>
                                    <Form.Check inline label="Gyroplane" type="radio" name="Gyroplane" onChange={this.knowledgeChangeHandler} checked={this.state.knowledgeSelected==="Gyroplane"}/>
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.includes("A18") &&
                            <Form.Group as={Row} controlId="A18_proficiency">
                                <Form.Label column md="5">[A18] Proficiency Check type: </Form.Label>
                                <Col md="7">
                                    <Form.Control type="text" name="sport_proficiency_check" onChange={this.props.handleChange}
                                                  className="w-100"/>
                                </Col>
                            </Form.Group>
                            }
                            {this.props.endorsements.some(i => aircraft_category.includes(i)) &&
                            <Form.Group as={Row} inline controlId="sport_CatClass">
                                <Form.Label column md={4}>Aircraft Category and Class: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="sport_categoryClass"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'Single-Engine Land'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }
                            {/*{this.props.endorsements.includes("A20") &&
                            <Form.Group as={Row} inline controlId="sportPractical">
                                <Form.Label column md={4}>[A20] Type of Practical Test: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="sport_practical_test"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }*/}
                            {this.props.endorsements.some(i => aircraft_make_and_model.includes(i)) &&
                            <Form.Group as={Row} inline controlId="sport_makeModel">
                                <Form.Label column md={4}>Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="sport_makeModel"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                        </Form>
                    </Row>
                </>
            )
        }
        else{
            return null;
        }
    }
}

export default SportPilotAdditionalInfo;