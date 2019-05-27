import React from 'react'
import Journal from '../Components/Journal.js'
import EntryList from '../Components/EntryList.js'
class Main extends React.Component {

    render(){
      return (
        <div>
        <EntryList/>
        <Journal/>
       </div>
      )
    }
  }

  export default Main;