import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  generic_endorsements } from './resources/Endorsment_Data';

class Endorsements extends Component{

    state = {
        generic : generic_endorsements
    }

    render() {
        return(
            <>
                <Button>Hello</Button>
                {this.state.generic.forEach(e => {
                    <Button>{e.name}</Button>
                })}
            </>
        );
    }
}

export default Endorsements;