import React from "react";
import {Form} from 'react-bootstrap';

import {FULL_PAGE} from './resources/Endorsements_Data';

class RepeatEndorsement extends React.Component {

    state = {
        showRepeat: [false,false]
    }

    setRepeat = () =>{
        this.setState( prevState => ({
            showRepeat: [!prevState.showRepeat[0], prevState.showRepeat[1] ]
        }));

        this.props.add(FULL_PAGE,this.props.endorsement.id);
    }

    setRepeatVisibility = (name, value) =>{
        if(name === "repeat_select" && value === "custom"){
            this.setState( prevState => ({
                showRepeat: [prevState.showRepeat[0], true ]
            }));
        }
        else if( name === "repeat_select" && value != "custom" && this.state.showRepeat[1] == true){
            this.setState( prevState => ({
                showRepeat: [prevState.showRepeat[0], false ]
            }));
        }
    }


    handleChange = (event, id) =>{
        let name = event.target.name;
        let value = event.target.value;

        this.setRepeatVisibility(name, value);

        if(name === "repeat_select" && value === "full_page"){
            this.props.add(FULL_PAGE,this.props.endorsement.id);
        }else if(name === "repeat_select" && value === "half_page"){
            this.props.add(FULL_PAGE/2,this.props.endorsement.id);
        }else if(name === "custom_number"){
            this.props.add(value,this.props.endorsement.id);
        }

    }


    render(props) {
        let displayRepeat = this.state.showRepeat[0] ? 'visible' : 'invisible';
        let displayCustom = this.state.showRepeat[0]&&this.state.showRepeat[1] ? 'visible' : 'invisible';
        return (

            <>
                <Form inline>
                    <Form.Check name="repeat" label="repeat" className="pr-5" onChange={this.setRepeat} />

                    <Form.Label className={"pr-3 " + displayRepeat}>Amount:</Form.Label>
                    <Form.Control as="select" name="repeat_select" onChange={(e) => this.handleChange(e, this.props.endorsement.id)}
                                  custom inline
                                  className={"my-1 mx-2 w-20 " + displayRepeat}>
                        <option value="full_page">Full Page</option>
                        <option value="half_page">Half Page</option>
                        <option value="custom">Custom</option>
                    </Form.Control>
                    <Form.Label className={"px-2 " + displayCustom}>Number of endorsements: </Form.Label>
                    <Form.Control name="custom_number" type="number" min="0" onChange={this.handleChange}
                                  className={displayCustom}/>
                </Form>
            </>
        )
    }
}

export default RepeatEndorsement;