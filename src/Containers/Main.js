import React from 'react'
import Journal from '../Components/Journal.js'
import EntryList from '../Components/EntryList.js'
import Settings from '../Components/Settings'
import Login from '../Components/Login'
import {Route, Switch, Link, withRouter} from 'react-router-dom'

class Main extends React.Component {

    render(){
      return (
        <div>
            <Switch>
            <Route path="/settings" component={Settings}/>
            <Route path="/new" component={Journal}/>
            <Route path="/entrylist" component={EntryList}/>  
            <Route path="/login" component={Login}/>
        </Switch>
       </div>
      )
    }
  }

  export default Main;