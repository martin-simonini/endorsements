import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {categories, generic_endorsements} from './resources/Endorsements_Data';

class Endorsements extends Component{

    state = {
        endorsement_pool: [], //current list of endorsements from Endorsements_Data
        checked: [], //List of endorsements that are selected
        selected: [], //Array of booleans where true means selected, false otherwise
        disableAll: false //Disables checkbox when user hits "select all"
    }

    /*
       * Changes a checkbox from unselected to selected and via versa.
     */
    changeSelected = ({target: {name}}) =>{
         // console.log("Name: "+name);
         if(this.state.checked.includes(name))//Removing selected item
         {
             //changing boolean variable in selected var.
             let tempSelected = [...this.state.selected];
             let index = this.findIndex(name);
             tempSelected[index] = !tempSelected[index];

             //changing state
             this.setState(prevState => ({
                 checked: prevState.checked.filter(item => item != name),
                 selected: tempSelected,
             }));

             //pushing change to App.js
             this.props.removeEndorsements(name);
         }
         else //Adding new item
         {
             //changing boolean variable in selected var.
             let tempSelected = [...this.state.selected];
             let index = this.findIndex(name);
             tempSelected[index] = !tempSelected[index];

             //Changing state
             const newArr = this.state.checked.concat(name);
             this.setState({checked: newArr, selected: tempSelected});

             //pushing change to App.js
             this.props.addEndorsements(name);
         }
    }

    /*
     * Find the index of a endorsement in the endorsement_pool (and selected) array
     */
    findIndex = (name) =>{
        let index = -1;
        let filteredObj = this.state.endorsement_pool.find(function(item, i){
            if(item.id === name){
                index = i;
                return i;
            }
        });
        return index;
    }

    /*
      * Sets the endorsement_pool state variable so we can look at the proper endorsement.
      * This should only happen once on creation.
     */
    setEndorsementPool = (cat) =>{
        if(cat === "GENERIC"){
            //Verify endorsement_pool is not already set. May want to use something more robust than JSON.Stringify
            if(JSON.stringify(generic_endorsements) !== JSON.stringify(this.state.endorsement_pool)){
                let temp = [];
                generic_endorsements.forEach(i => {
                    temp.push(false);
                })
                this.setState({endorsement_pool: generic_endorsements, selected: temp});
            }
        }
    }

    /*
     * This method enables the "select All functionality.
     */
    selectAll = () =>
    {
        let temp = []; //Holds the endorsements that need to be pushed up to App.js
        this.state.endorsement_pool.forEach(i => {
            temp.push(i.id);
        });

        if(this.state.disableAll === false){ //User wants to select all
            //Have to remove the endorsements that have been already selected so that
            // App.js doesn't have multiple copies.
            this.state.checked.forEach(i => {
                temp = temp.filter(item => item !== i);
            })
            this.props.addEndorsements(temp);
        }
        else{ //User wants to deselect all
            this.props.removeEndorsements(temp);
        }

        //Set select so user will register all checkbox's selected/unselected.
        let tempSelected = [];
        this.state.selected.forEach(i => tempSelected.push(!this.state.disableAll));

        //Change state
        this.setState(prevState => ({
            disableAll: !prevState.disableAll,
            selected: tempSelected
        }));
    }

    render() {
        this.setEndorsementPool(this.props.category);

            return(
                <>
                    <Form.Check label="Select All" onChange={this.selectAll} />
                    {this.state.endorsement_pool.map((end, index) => (
                       <Form.Check name={end.id} label={end.name} onChange={this.changeSelected} disabled={this.state.disableAll} checked={this.state.selected[index]} />
                    ))}
                </>
            );
    }
}

export default Endorsements;