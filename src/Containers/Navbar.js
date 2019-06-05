import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link, withRouter} from 'react-router-dom'



class Navbar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

    render(){
      const { activeItem } = this.state

    return (
      <div id='navBar'>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/new"><Menu.Item name='New' active={activeItem === 'New'} onClick={this.handleItemClick} /></Link>
          <Link to="/entrylist"><Menu.Item
            name='My Journal'
            active={activeItem === 'My Journal'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to="/settings"><Menu.Item
            name='Profile'
            active={activeItem === 'Profile'}
            onClick={this.handleItemClick}
          /></Link>
          <Link to="/login">
          <Menu.Item
            name='Logout'
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}
          /></Link>
        </Menu>
   
      </Segment>
      </div>
    )
         }
       
    }
  

  export default withRouter(Navbar);