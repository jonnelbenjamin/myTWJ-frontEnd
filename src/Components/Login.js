import React from 'react'

class Login extends React.Component {

    render(){
      return (
        <div id="login">
       <h1>"I'm the login page!"</h1>
       <form>
       <input placeholder='email' type='email'></input>
       <input placeholder='password' type='password'></input>
       <br></br>
       <button>Login</button>
       </form>

       </div>
      )
    }
  }

  export default Login;