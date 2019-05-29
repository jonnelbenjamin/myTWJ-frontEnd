import React from 'react'
import { Icon, Table, Search } from 'semantic-ui-react'
import Calendar from 'react-calendar';
import ReactSearchBox from 'react-search-box'


class EntryList extends React.Component {
    constructor(){
    super()
    this.state = {
        entryList: [],
        date: "",
        search: ""
    }
}

componentDidMount(){
    fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(entryList => this.setState({
        entryList
    }))
}
  formatDateVariable = (dateVariable) => {
  let day = dateVariable.getDay()
  let month = dateVariable.getMonth()
  let year = dateVariable.getFullYear()
  debugger
}

onCalendarChange = (date) => {
  let newDate = this.formatDateVariable(date)
  this.setState({ date:newDate })}

searchChange = (e) => {
    this.setState({
    search: e.target.value
})
}

formatDateVariable = (dateVariable) => {
  let day = dateVariable.getDate()
  let month = dateVariable.getMonth()
  let year = dateVariable.getFullYear()
  // 2019-05-29
  
  if(month >= 10){
    let parsedString = `${year}-${month}-${day}`

    return parsedString
    
  }
  else if(month < 10){
  let parsedString = `${year}-0${month}-${day}`
    return parsedString
    
}
  
}


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
            {this.state.date ? this.state.entryList.map(entry => entry.date_and_time.includes(this.state.date) 
            ? <Table.Row><Table.Cell>{entry.description}</Table.Cell>
            </Table.Row> : console.log('not hitting the correct dates')): null}
        {this.state.search ? this.state.entryList.map(entry => entry.description.includes(this.state.search) ?  <Table.Row>
            <Table.Cell>{entry.description}</Table.Cell>
            </Table.Row> : null) : this.state.entryList.map(entry => 
            <Table.Row>
            <Table.Cell>{entry.description}</Table.Cell>
            </Table.Row>
            )}
            </Table.Body>
        </Table>
        <Calendar
          onChange={this.onCalendarChange}
          value={new Date()}
        />
        <div id='search'>
          <Search onSearchChange={this.searchChange}
          
          ></Search>
        </div> 
       </div>
      )
    }
  }

  export default EntryList;
