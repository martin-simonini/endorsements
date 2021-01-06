import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form } from 'react-bootstrap';


class GenericAdditionalInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {
            A1: '',
            A2: ''
        }
    }

    handleChange = ({target: {value,name}}) =>{
        if(name === "A1Input"){
            this.props.handleChange({name: "generic_info", value: [value, this.state.A2]});
            this.setState({A1: value});
        }
        else if(name === "A2Input"){
            this.props.handleChange({name: "generic_info", value: [this.state.A1, value]});
            this.setState({A2: value});
        }
    }

    render() {

        if(this.props.display)
        {
            return (
                <>
                    <Row className="mb-4">
                    <h2 className="float-left">Generic Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                    <Form className="w-50">
                        {this.props.endorsements.includes("A1")&&
                            <Form.Group as={Row} controlId="A1_test_input">
                                <Form.Label column sm="5">Certificate or Rating: </Form.Label>
                                <Col sm="7">
                                    <Form.Control
                                        type="text"
                                        name="A1Input"
                                        onChange={this.handleChange}
                                        placeholder="e.g. 'private pilot' or 'instrument-airplane"
                                        className="w-100"
                                    />
                                </Col>
                            </Form.Group>
                        }
                        {this.props.endorsements.includes("A2")&&
                            <Form.Group as={Row} controlId="A2_test_input">
                                <Form.Label column md="5">Airman knowledge test: </Form.Label>
                                <Col md="7">
                                    <Form.Control type="text" name="A2Input" onChange={this.handleChange} placeholder="e.g. 'private pilot'" className="w-100"/>
                                </Col>
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

export default GenericAdditionalInfo;