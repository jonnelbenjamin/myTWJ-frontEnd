import React from 'react'

class Login extends React.Component {

  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  
  render(){
      return (
        <div id="login">
       <h1>"I'm the login page!"</h1>
       <form>
       <input name='email' placeholder='email' type='email' onChange={this.handleChange}></input>
       <input name='password' placeholder='password' type='password' onChange={this.handleChange}></input>
       <br></br>
       <button onClick={() => this.props.handleLoginSubmit(this.state)}>Login</button>
       </form>

       </div>
      )
    }
  }

  export default Login;