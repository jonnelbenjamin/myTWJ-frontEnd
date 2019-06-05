import React from 'react';
import './App.css';
import Navbar from './Containers/Navbar.js'
import Main from './Containers/Main.js'

class App extends React.Component {
  
  state = {
    currentUser: null,
    loading: true
  }
  
 componentDidMount(){

   this.mount()
 }
 

  mount = () => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`}
          })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data,
          loading:false})
      })
    }else{
      this.setState({loading: false})
    }
  }

  handleLoginSubmit = (userObj) => {
    debugger
    fetch(`http://localhost:3000/login`, {
      method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          user: userObj
        })
        
    }
    )
    .then(res =>res.json())
    .then(data => {
      debugger
      if(data.error){
        console.log(data)
        alert('Incorrect username or password')
      }else{
        debugger
        console.log(data)
        this.setState({currentUser: data.user })
        localStorage.setItem("token", data.token)
      }
    })
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
    localStorage.clear()
  }
render(){
  return (
    <div className="App">
      <header className="App-header">
        <Navbar logged_in={this.state.currentUser} onLogOut={this.handleLogOut}/>
        <Main handleLoginSubmit={this.handleLoginSubmit} />
        
      </header>
    </div>
  );
}
}

export default App;
