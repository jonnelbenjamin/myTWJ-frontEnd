import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Journal extends React.Component {
    constructor() {
        super()
        let today = new Date(),
            date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();

        this.state = {
            currentEntry: "",
            date: date
        }
    }

    handleChange = (e) => {
        this.setState({
            currentEntry: e.target.value
        })
    }

    handleSubmit = (entry) => {
        let today = new Date(),
        date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear()
        let userId = 1
        fetch('http://localhost:3000/entries', {
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                description: entry,
                user_id: userId,
                date_and_time: date
            })
        }
        )
    } 

    render(){
      return (
         
        <div id='journalBackground'>
       <p id='journalDate'>{this.state.date}</p>
       <textarea id='journal' onChange={this.handleChange} rows='28'></textarea>
        {/* <Form id='journal'>
          <Form.Field control='textarea' rows='24' 
          onChange={this.handleChange}
          />
        </Form> */}
        <Link to="/entrylist"><Button id='submitJournal' content='Submit Entry' icon='edit' onClick={() => this.handleSubmit(this.state.currentEntry)}/></Link>
       
       </div>
      )
    }
  }

  export default Journal;