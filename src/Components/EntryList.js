import React from 'react'
import { Icon, Table, Search } from 'semantic-ui-react'
import Calendar from 'react-calendar';

class EntryList extends React.Component {
    constructor(){
    super()
    this.state = {
        entryList: [],
        date: new Date()
    }
}

componentDidMount(){
    fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(entryList => this.setState({
        entryList
    }))
}

onCalendarChange = date => this.setState({ date })


    render(){
      return (
        <div>
       
      <Table id="journalEntries">
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>Entries List</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          <Table.Body>
        {this.state.entryList.map(entry => 
            <Table.Row>
            <Table.Cell>{entry.description}</Table.Cell>
            </Table.Row>
            )}
            </Table.Body>
        </Table>
        <Calendar
          onChange={this.onCalendarChange}
          value={this.state.date}
        />
        <div id='search'>
        <Search/>  
        </div> 
       </div>
      )
    }
  }

  export default EntryList;
