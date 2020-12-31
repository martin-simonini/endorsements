import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {categories, generic_endorsements} from './resources/Endorsment_Data';
import {ChevronDoubleDown, ChevronDoubleRight} from "react-bootstrap-icons";

class Endorsements extends Component{



    render() {
        if(this.props.category === "GENERIC")
        {
            return(
                <>
                    {generic_endorsements.map((end, index) => (
                       <Form.Check name={end.id} label={end.name} onChange={this.props.addEndorsement} />
                    ))}
                </>
            );
        }



        return(
            <>

            </>
        );
    }
}

export default Endorsements;