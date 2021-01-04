import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {generic_endorsements} from './resources/Endorsements_Data';

class GenericAdditionalInfo extends Component{

    constructor(props) {
        super(props);
    }
    render() {

        if(this.props.display)
        {
            return (
                <>
                    <h1>Generic Endorsement - Additional Information</h1>
                </>
            )
        }else
            return null;
    }
}

export default GenericAdditionalInfo;