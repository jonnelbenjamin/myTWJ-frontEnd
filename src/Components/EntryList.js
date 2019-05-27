import React from 'react'

class EntryList extends React.Component {
    constructor(){
    super()
    this.state = {
        entryList: []
    }
}

    render(){
      return (
        <div>
            <ul>
        {this.state.entryList.map(entry => 
            <li>
                entry
            </li>
            )}
            </ul>
       </div>
      )
    }
  }

  export default EntryList;