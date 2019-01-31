import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username_state: "",
      password_state:"",
      showPassword: false,
      inputType: "password"
    };
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.login = this.login.bind(this);
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
    if(this.state.showPassword===false)
    {
      this.setState({inputType: "text" });
    }
    else
    {
      this.setState({inputType: "password" });
    }
    console.log("toggle called")
  }

  login() {
    console.log("username :", this.state.username_state, "password : ", this.state.password_state);
    let bodyFormData = new FormData();
    bodyFormData.set('username', this.state.username_state);
    bodyFormData.set('password', this.state.password_state);
    // axios.post('/user-login', {
    //   username: this.state.username_state,
    //   password: this.state.password_state
    // })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });


    axios({
      method: 'post',
      url: '/user-login',
      data: bodyFormData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"> </div>
            <form className = "col-4">
              <div className = "form-group">
                <label> Username: </label>
                <input type = "text" className = "form-control" id = "usr" value={this.state.username} onChange={(username)=>{this.setState({username_state: username.target.value})}}/>
              </div>
              <div className="form-group">
                <label >Password: </label>
                <input type={this.state.inputType} className="form-control" id="pwd" value={this.state.password} onChange={(password)=>{this.setState({password_state: password.target.value})}}/>
              </div>
              <div className="form-group checkbox">
                <label id="label_password_checkbox"><input type="checkbox" onChange={this.toggleSwitch} defaultChecked={this.state.showPassword}/> Show Password </label>
              </div>
              <div className="form-group">
                <button type="button" className="btn-primary col-12" onClick={this.login}> Submit </button>
              </div>
            </form>
          <div className="col-4" > </div>
        </div>
      </div>
    );
  }
}

export default App;
