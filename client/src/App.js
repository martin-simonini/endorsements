import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    studentName:'(First Name, MI, Last name)_________________________',
    gender: '[he or she]'
  }

    handleChange = ({target: {value,name}}) =>
    {
        console.log("value: "+value+", name: "+name);
        this.setState({[name]: value});
    }

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
        .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

          saveAs(pdfBlob, 'newPdf.pdf');
        })
  }

    render() {
        return (
            <div className="App">
                <h1>Create Endorsements</h1> <br />
                <div className="studentInfo">
                    <h2>Student Information</h2>
                    <label htmlFor="studentName" className="label">Student's Name</label>
                    <input type="text" placeholder="John J. Doe" name="studentName" onChange={this.handleChange} className="input"/>
                    <label htmlFor="gender">Gender: </label>

                    <select name="gender" onChange={this.handleChange}>
                        <option  value="[he or she]"></option>
                        <option value="he">Male</option>
                        <option value="she">Female</option>
                    </select>
                </div><br />
                <button onClick={this.createAndDownloadPdf}>Download PDF</button>
            </div>
        );
    }
}

export default App;
