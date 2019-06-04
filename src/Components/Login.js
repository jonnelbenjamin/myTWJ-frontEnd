import React from 'react'

class Login extends React.Component {

  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
//
  handleLogin = () => {
    let userObj = this.state
  fetch(`http://localhost:3000/login`, {
       method:"POST",
       headers: {
         "Content-type":"application/json",
       },
       body: JSON.stringify({user: userObj})
       }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.error){
            alert('Incorrect email and/or password')
          } else {
            console.log('Login Successful')
            localStorage.setItem('token', data.token)
          }
       }
     )
      }

    render(){
      return (
        <div id="login">
       <h1>"I'm the login page!"</h1>
       <form>
       <input name='email' placeholder='email' type='email' onChange={this.handleChange}></input>
       <input name='password' placeholder='password' type='password' onChange={this.handleChange}></input>
       <br></br>
       <button onClick={this.handleLogin}>Login</button>
       </form>

       </div>
      )
    }
  }

  export default Login;