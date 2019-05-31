import React from 'react'
import { Icon, Table, Search, Confirm } from 'semantic-ui-react'
import Calendar from 'react-calendar';


class EntryList extends React.Component {
  constructor() {
    super()
    this.state = {
      entryList: [],
      date: "",
      search: "",
      open: false
    }
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  componentDidMount() {
    fetch('http://localhost:3000/entries')
      .then(res => res.json())
      .then(entryList => this.setState({
        entryList
      }))
  }


  onCalendarChange = (date) => {
    let newDate = this.formatDateVariable(date)
    this.setState({ date: newDate, search: "" })
  }

  searchChange = (e) => {
    this.setState({
      search: e.target.value,
      date: ""
    })
  }

  formatDateVariable = (dateVariable) => {
    let day = dateVariable.getDate()
    let month = dateVariable.getMonth() + 1
    let year = dateVariable.getFullYear()
    // 2019-05-29

    if (month >= 10 && day < 10) {
      let parsedString = `${month}-0${day}-${year}`
      return parsedString
    }
    else if (month < 10 && day < 10) {
      let parsedString = `${month}-0${day}-${year}`
      return parsedString
    }
    else if (day >= 10 && month < 10) {
      let parsedString = `${month}-${day}-${year}`
      return parsedString
    }
    else {
      let parsedString = `${month}-${day}-${year}`
      return parsedString
    }

  }

  handleDelete = (e) => {
    fetch(`http://localhost:3000/entries/${e.target.parentElement.parentElement.id}`, {
      method: "DELETE"
    } )
    .then(this.setState({
      open: false
    }))
  }


  render() {
    return (
      <div>

        <Table id="journalEntries">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Entries List</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.search ? this.state.entryList.map(entry => entry.description.includes(this.state.search) ? <Table.Row>
              <Table.Cell>{entry.description}</Table.Cell>
              <Table.Cell>{entry.date_and_time}</Table.Cell>
              <Table.Cell><Icon name='trash' onClick={this.open} id={entry.id}/></Table.Cell>
              <Confirm open={this.state.open} onCancel={this.close} id={entry.id} onConfirm={this.handleDelete} />
            </Table.Row> : null) 
            : this.state.date ? 
            this.state.entryList.map(entry => entry.date_and_time.startsWith(this.state.date)
              ? <Table.Row><Table.Cell>{entry.description}</Table.Cell>
                <Table.Cell>{entry.date_and_time}</Table.Cell>
                <Table.Cell><Icon name='trash' onClick={this.open} id={entry.id}/></Table.Cell>
                <Confirm open={this.state.open} onCancel={this.close} id={entry.id} onConfirm={this.handleDelete} />
              </Table.Row> : null)
                : this.state.entryList.map(entry =>
                  <Table.Row>
                    <Table.Cell>{entry.description}</Table.Cell>
                    <Table.Cell>{entry.date_and_time}</Table.Cell>
                    <Table.Cell><Icon name='trash' onClick={this.open} id={entry.id}/></Table.Cell>
                    <Confirm open={this.state.open} onCancel={this.close} id={entry.id} onConfirm={this.handleDelete} />
                  </Table.Row>)}
          </Table.Body>
        </Table>
        <Calendar
          onChange={this.onCalendarChange}
          value={new Date()}
        />
        <div id='search'>
          <Search onSearchChange={this.searchChange}
          showNoResults={false}
          ></Search>
        </div>
      </div>
    )
  }
}

export default EntryList;
