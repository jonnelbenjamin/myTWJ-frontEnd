import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Route, Switch, Link, withRouter} from 'react-router-dom'



class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

    render(){
      const { activeItem } = this.state

    return (
      <div id='navBar'>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/new"><Menu.Item name='New' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
          <Link to="/entrylist"><Menu.Item
            name='My Journal'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to="/settings"><Menu.Item
            name='Settings'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to="/login">
          <Menu.Item
            name='Logout'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          /></Link>
        </Menu>
   
      </Segment>
      </div>
    )
         }
       
    }
  

  export default withRouter(Navbar);