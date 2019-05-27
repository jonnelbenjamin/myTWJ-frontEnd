import React from 'react'
import {Form, Button} from 'semantic-ui-react'

class Journal extends React.Component {
    constructor() {
        super()
        this.state = {
            currentEntry: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            currentEntry: e.target.value
        })
    }

    handleSubmit = (entry) => {
        let userId = 1
        fetch('http://localhost:3000/entries', {
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                description: entry,
                user_id: userId,
                date_and_time: 'today is the day'
            })
        }
        )
    } 

    render(){
      return (
        <div>
       
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