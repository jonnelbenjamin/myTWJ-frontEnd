import React from 'react'
import {Form, Button} from 'semantic-ui-react'

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
        let dateAndTime = new Date()
        let userId = 1
        fetch('http://localhost:3000/entries', {
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                description: entry,
                user_id: userId,
                date_and_time: dateAndTime
            })
        }
        )
    } 

    render(){
      return (
        <div>
       <p>{this.state.date}</p>
        <Form>
          <Form.TextArea 
          onChange={this.handleChange}
          />
          <Button content='Submit Entry' icon='edit' onClick={() => this.handleSubmit(this.state.currentEntry)}/>
        </Form>
       </div>
      )
    }
  }

  export default Journal;