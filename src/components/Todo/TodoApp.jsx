import React, { Component } from 'react'

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
    <LoginComponents/>   
        </div>
    )
  }
}
class LoginComponents extends Component {
  constructor(props)
  {
    super(props)

    this.state ={
      Username: '',
      Password: '',
     // hasLoginFail='false',
     // giveSucessMessage='false'
      
  } 

//  this.handleUserNameChange=this.handleUserNameChange.bind(this);
 // this.handlePasswordChange=this.handlePasswordChange.bind(this);
   this.handleChange=this.handleChange.bind(this);
   this. loginClicked=this. loginClicked.bind(this);
}

   handleChange(event)
  {
   //  console.log(this.state);
    this.setState({
      [event.target.name]: 
      event.target.value
   })
  }
 
  loginClicked(){
    if(this.state.Username==='tanu'&& this.state.Password==='gaur')
  {  console.log("Login Sucessful")
     console.log()
  }
  else
  console.log("Failed Entry")
  }
 
 /* handleUserNameChange(event)
  {
     console.log(event.target.value);
    this.setState({
      Username: event.target.value
   })
 }*/


 /* handlePasswordChange(event)
  { console.log(event.target.value);
    this.setState({
      Password: event.target.value
   })
 }*/


  render() {
    return (
     <>
     <div>Login Sucessful</div>
     <div>Failed Credentials</div> Username: <input type="text" name='Username' value= {this.state.Username} onChange={ this.handleChange}/>
      Password: <input type="password" name='Password' value= {this.state.Password}onChange={ this.handleChange} />
      <button onClick={this.loginClicked}>Login</button>
      </>
    )
  }
}
export default TodoApp