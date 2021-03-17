import React from "react";
import {Form} from 'react-bootstrap';

import {FULL_PAGE} from '../resources/Endorsements_Data';

class RepeatEndorsement extends React.Component {

    state = {
        showRepeat: false, //true if "repeat" checkbox is selected.
        num_of_endorsements: FULL_PAGE,
        repeatSelectValue: "full_page" //value of the drop down

    }

    /*
        * Event handler for the "repeat" checkbox
     */
    setRepeat = () =>{
        // console.log("[RepeatEndorsement.setRepeat] num_of_endorsements: "+this.state.num_of_endorsements+"\n showRepeat: "+this.state.showRepeat);
        this.setState( prevState => ({
            showRepeat: !prevState.showRepeat
        }));
    }


    /*
    * Event handler for the select repeat dropdown
    */
    handleChange = (event) =>{
         // console.log("[RepeatEndorsement.handleChange] num_of_endorsements: "+this.state.num_of_endorsements+"\n showRepeat: "+this.state.showRepeat);
        let name = event.target.name;
        let value = event.target.value;
        let num_of_end = 0;

        if(name === "repeat_select" && value === "full_page"){
            this.props.add(FULL_PAGE,this.props.endorsement.id);
            num_of_end = FULL_PAGE;
        }else if(name === "repeat_select" && value === "half_page"){
            this.props.add(FULL_PAGE/2,this.props.endorsement.id);
            num_of_end = FULL_PAGE/2;
        }else if(name === "custom_number"){
            this.props.add(value,this.props.endorsement.id);
            num_of_end = Number.isNaN(value)?value:this.state.num_of_endorsements;
            console.log("num: "+num_of_end+", isNumber: "+Number.isNaN(value)+", numEnd: "+this.state.num_of_endorsements);
        }

        this.setState({num_of_endorsements: num_of_end, repeatSelectValue: value});

    }

    /*
    * Event handler for the custom endorsement number field.
    */
    handleCustomChange = (event) =>{
        /*
         Please note that if the user inputs '0' the field will update to zero but the endorsements list in App.js will
         have 1 endorsement. This is because the endorsement itself is still selected. If we try to set the min number of
         endorsements to 1 then the user will be unable to clear the input field. We are leaving this bug in for now because
         it doesn't make sense for the user to set the number of endorsements to zero without unchecking the endorsement.
         */
        if(event.target.value !== '')
            this.props.add(event.target.value, this.props.endorsement.id);
        this.setState({num_of_endorsements: event.target.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //repeat should reset if the user deselects the endorsement.
        if(prevProps.selected && !this.props.selected){
            this.setState({
                showRepeat: false,
                repeatSelectValue: "full_page",
                num_of_endorsements: FULL_PAGE,
            });
        }

        /*
        * pushes changes to endorsement number in App.js if "repeat" is selected/deselected.
        * Have to include selected so that we dont push one endorsement to App.js when the
        * user wanted to remove them all.
        */
        else if(prevState.showRepeat !== this.state.showRepeat && this.props.selected){
            if(this.state.showRepeat) {
                this.props.add(this.state.num_of_endorsements, this.props.endorsement.id);
            }else {
                this.props.add(1, this.props.endorsement.id);
            }
        }
    }

    render() {
        //changes the CSS to hide/show repeat and custom repeat
        let displayRepeat = this.state.showRepeat ? 'visible' : 'invisible';
        let displayCustom = (this.state.showRepeat&&this.state.repeatSelectValue==="custom") ? 'visible' : 'invisible';
        return (

            <>
                <Form inline>
                    <Form.Check name="repeat" label="repeat" className="pr-5" onChange={this.setRepeat} checked={this.state.showRepeat}/>
                    <Form.Label className={"pr-3 " + displayRepeat}>Amount:</Form.Label>
                    <Form.Control as="select" name="repeat_select" onChange={(e) => this.handleChange(e)}
                                  value={this.state.repeatSelectValue}
                                  custom
                                  inline="true"
                                  className={"my-1 mx-2 w-20 " + displayRepeat}>
                        <option value="full_page">Full Page</option>
                        <option value="half_page">Half Page</option>
                        <option value="custom">Custom</option>
                    </Form.Control>
                    <Form.Label className={"px-2 " + displayCustom}>Number of endorsements: </Form.Label>
                    <Form.Control name="custom_number" type="number" min="1" onChange={this.handleCustomChange} value={this.state.num_of_endorsements}
                                  className={displayCustom} />
                </Form>
            </>
        )
    }
}

export default RepeatEndorsement;