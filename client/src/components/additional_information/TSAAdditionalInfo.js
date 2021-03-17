import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Form } from 'react-bootstrap';


class TSAAdditionalInfo extends Component{

    handleChange = ({target: {value}}) =>{
        this.props.handleChange({name: "tsa_info", value: value});
    }

    render() {

        if(this.props.endorsements.includes("A14"))
        {
            return (
                <>
                    <Row className="mb-4">
                        <h2 className="float-left">TSA Endorsement - Additional Information</h2>
                    </Row>
                    <Row>
                        <Form className="w-50" inline>
                            <Form.Label column sm="5">Type of Document: </Form.Label>
                            <Form.Group as={Row} controlId="A14_input">
                                <Form.Control as="select" name="repeat_select" onChange={this.handleChange} value={this.props.tsaInfo} inline>
                                    <option value="(type of document) ________________________">Leave Blank</option>
                                    <option value="U.S. birth certificate">U.S. birth certificate</option>
                                    <option value="U.S. passport">U.S. passport</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Row>
                </>
            )
        }else
            return null;
    }
}

export default TSAAdditionalInfo;