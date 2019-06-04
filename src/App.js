import React from 'react';
import './App.css';
import Navbar from './Containers/Navbar.js'
import Main from './Containers/Main.js'

function App() {
  
  state = {
    currentUser: null,
    loading: true
  }
  
 componentDidMount();{

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

  handleLoginSubmit = (username, password) => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({
          username:username,
          password:password
        })
    })
    .then(res =>res.json())
    .then(data => {
      if(data.error){
        console.log(data)
        alert('Incorrect username or password')
      }else{
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

  return (
    <div className="App">
      <header className="App-header">
        <Navbar logged_in={this.state.currentUser} onLogOut={this.handleLogOut}/>
        <Main />
        
      </header>
    </div>
  );
}

export default App;
