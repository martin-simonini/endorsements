import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form } from 'react-bootstrap';
import {
    additional_endorsements,
    additional_student_pilot_endorsements,
    aircraft_make_and_model, grade_of_certificate
} from "../resources/Endorsements_Data";


class AdditionalEndorsementsAdditionalInfo extends Component{

    state = {
        grade: "",
        practicalSelected: "",
        wings: ""
    }

    eventHandler = (target, value) => {
        if( this.state.practicalSelected !== target){
            this.setState({practicalSelected: target});
            this.props.handleChange({target: {name: value, value: target}});
        }
    }

    render(){
        if(additional_endorsements.some(i => this.props.endorsements.includes(i.id)))
        {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">Additional Endorsements - Supplemental Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50">
                            {this.props.endorsements.some(i => grade_of_certificate.includes(i))&&
                            <Form.Group as={Row}>
                                <Form.Label column md="5">Grade of Pilot Certificate: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Private Pilot" type="radio" name="Private Pilot" onChange={(e)=> this.eventHandler("gradeOfCert",e.target.name)} checked={this.state.grade==="Private Pilot"}/>
                                    <Form.Check inline label="Commercial Pilot" type="radio" name="Commercial Pilot" onChange={(e)=> this.eventHandler("gradeOfCert",e.target.name)} checked={this.state.grade==="Commercial Pilot"}/>
                                    <Form.Check inline label="ATP Pilot" type="radio" name="ATP Pilot" onChange={(e)=> this.eventHandler("gradeOfCert",e.target.name)} checked={this.state.grade==="ATP Pilot"}/>
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline controlId="certificate">
                                <Form.Label column md={4}>Applicant's Certificate Number: </Form.Label>
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
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A66") &&
                            <Form.Group as={Row}>
                                <Form.Label column md="5">FAA WINGS level completed: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="Basic" type="radio" name="Basic"
                                                onChange={(e)=> this.eventHandler("wingsLevel",e.target.name)}
                                                checked={this.state.grade === "Basic"}/>
                                    <Form.Check inline label="Advanced" type="radio" name="Advanced"
                                                onChange={(e)=> this.eventHandler("wingsLevel",e.target.name)}
                                                checked={this.state.grade === "Advanced"}/>
                                    <Form.Check inline label="Master" type="radio" name="Master"
                                                onChange={(e)=> this.eventHandler("wingsLevel",e.target.name)}
                                                checked={this.state.grade === "Master"}/>
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline controlId="phaseNum">
                                <Form.Label column md={4}>Wings Phase Number: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="number"
                                        name="phaseNum"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A68")&&
                            <Form.Group as={Row} inline>
                                <Form.Label column md={4}>Complex Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="complexMakeModel"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'PA-28-R'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A68")&&
                            <Form.Group as={Row} inline>
                                <Form.Label column md={4}>High-Performance Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="HPmakeModel"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'C182'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A70")&&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>Pressurized Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="pressureMakeModel"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'C182'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A71")&&
                            <Form.Group as={Row} inline>
                                <Form.Label column md={4}>Tailwheel Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="twMakeModel"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'C180'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A72")&&
                            <Form.Group as={Row} inline>
                                <Form.Label column md={4}>[A72] Aircraft Category and Class: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A72_categoryClass"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline>
                                <Form.Label column md={4}>[A72] Aircraft Make and Model: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A72_makeModel"
                                        onChange={this.props.handleChange}
                                        placeholder="e.g. 'C180'"
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>[A72] Limitations (optional): </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A72_limitation"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A73") &&
                            <Form.Group as={Row}>
                                <Form.Label column md="5">Type of Additional Training: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="flight" type="radio" name="flight"
                                                onChange={(e)=> this.eventHandler("add_training",e.target.name)}
                                                checked={this.state.grade === "flight"}/>

                                    <Form.Check inline label="ground" type="radio" name="ground"
                                                onChange={(e)=> this.eventHandler("add_training",e.target.name)}
                                                checked={this.state.grade === "ground"}/>

                                    <Form.Check inline label="both" type="radio" name="flight and ground"
                                                onChange={(e)=> this.eventHandler("add_training",e.target.name)}
                                                checked={this.state.grade === "flight and ground"}/>
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>Name of knowledge/practical test: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A73_test"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A74") &&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>Additional Aircraft Category or Class Rating: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A74_addCatClass"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>[A74] Name of practical test: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A74_practical"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A75") &&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>Name of Type Rating: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A75_typeRating"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A76") &&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>Additional Aircraft Category/Class/Type Rating: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A76_catClass"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>&&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>[A76] Name of practical test: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A76_practical"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A77") &&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>[A77] Name of Type Rating: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A77_practical"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A78") &&
                            <Form.Group as={Row} inline >
                                <Form.Label column md={4}>[A78] Name of Category/Class/Type Rating: </Form.Label>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="A78_type"
                                        onChange={this.props.handleChange}
                                        className="w-100"
                                        inline
                                    />
                                </Col>
                            </Form.Group>
                            }

                            {this.props.endorsements.includes("A79") &&
                                <Form.Group as={Row} inline>
                                    <Form.Label column md={4}>Glider Make and Model: </Form.Label>
                                    <Col md={8}>
                                        <Form.Control
                                            type="text"
                                            name="A79_makeModel"
                                            onChange={this.props.handleChange}
                                            className="w-100"
                                            inline
                                        />
                                    </Col>
                                </Form.Group>&&
                                <Form.Group as={Row}>
                                    <Form.Label column md="5">Launch Procedure: </Form.Label>
                                    <Col md="7">
                                        <Form.Check inline label="ground-tow" type="radio" name="ground-tow"
                                                    onChange={(e)=> this.eventHandler("A79_type",e.target.name)}
                                                    checked={this.state.grade === "ground-tow"}/>
                                        <Form.Check inline label="aerotow" type="radio" name="aerotow"
                                                    onChange={(e)=> this.eventHandler("A79_type",e.target.name)}
                                                    checked={this.state.grade === "aerotow"}/>
                                        <Form.Check inline label="self-launch" type="radio" name="self-launch"
                                                    onChange={(e)=> this.eventHandler("A79_type",e.target.name)}
                                                    checked={this.state.grade === "self-launch"}/>
                                    </Col>
                                </Form.Group>
                            }

                            {this.props.endorsements.includes("A80") &&
                            <Form.Group as={Row}>
                                <Form.Label column md="5">[A80] Towing Experience: </Form.Label>
                                <Col md="7">
                                    <Form.Check inline label="glider" type="radio" name="towing a glider"
                                                onChange={(e)=> this.eventHandler("A79_type",e.target.name)}
                                                checked={this.state.grade === "towing a glider"}/>

                                    <Form.Check inline label="unpowered ultralight vehicle" type="radio" name="towing an unpowered ultralight vehicle"
                                                onChange={(e)=> this.eventHandler("A79_type",e.target.name)}
                                                checked={this.state.grade === "towing an unpowered ultralight vehicle"}/>

                                    <Form.Check inline label="simulating towing flight procedures" type="radio" name="simulating towing a flight procedures"
                                                onChange={(e)=> this.eventHandler("A79_type",e.target.name)}
                                                checked={this.state.grade === "simulating towing a flight procedures"}/>
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

export default AdditionalEndorsementsAdditionalInfo;