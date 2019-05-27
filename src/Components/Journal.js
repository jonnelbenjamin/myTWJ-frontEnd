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
        console.log('hit')
        this.setState({
            currentEntry: e.target.value
        })
    }

    handleSubmit = () => {
        console.log('hit')
        debugger
    } 

    render(){
      return (
        <div>
       
        <Form reply>
          <Form.TextArea 
          onChange={this.handleChange}
          />
          <Button content='Submit Entry' icon='edit' onClick={this.handleSubmit}/>
        </Form>
       </div>
      )
    }
  }

  export default Journal;