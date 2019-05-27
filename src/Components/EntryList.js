import React from 'react'

class EntryList extends React.Component {
    constructor(){
    super()
    this.state = {
        entryList: []
    }
}

componentDidMount(){
    fetch('http://localhost:3000/entries')
    .then(res => res.json())
    .then(entryList => this.setState({
        entryList
    }))
}

    render(){
      return (
        <div>
            <ul>
        {this.state.entryList.map(entry => 
            <li>
                {entry.description}
            </li>
            )}
            </ul>
       </div>
      )
    }
  }

  export default EntryList;