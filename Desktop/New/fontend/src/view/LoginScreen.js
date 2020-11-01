import React, { Component } from 'react';
import { Button, Card, CardContent, FormHelperText, TextField, Typography } from '@material-ui/core'
import ModView from './ModView'
import axios from 'axios'
import {login} from '../api/AuthApi'
import Cookie from 'js-cookies'
import { withRouter } from 'react-router-dom';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      username: '',
      password: '',
      isLogin: false,
      isCorect: false,
      isLoading: false
    }
  }

  async componentDidMount(){
    console.log(this.state.name)
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  } 

  login = async () => {
    const response = await login(this.state.username, this.state.password);
    console.log('res', response);
    if (response){
      let token = response.data.token;
      Cookie.setItem('token', token , { expires:60});
      this.props.history.push('/modview')
    } else {
      //dang nhap that bai
      //in ra dang nhap that bai
    }
  }
  
  
  render(){
    if(this.state.isLogin){
      return (
        <ModView username={this.state.username}> 
     
        </ModView>
      )
    } else {
      if(this.state.isLoading){
        return (
          <h3>Loadinggg...</h3>
        )
      } else {
        return (
          <Card style={{
            margin:150,
            padding:50,
            display:'flex',
            flexDirection:'column'
          }}>
            
            <Typography style={{
              textAlign:'center'
            }}>
              <h1>
                Login Page
              </h1>
            </Typography>
            <TextField
            variant="filled"
            label="Username" 
            name="username" 
            onChange={this.handleChange}
            style={{
              margin:10,
            }}>
            </TextField>
            <TextField
            variant="filled"
            label="Password"  
            name="password" 
            onChange={this.handleChange}
            style={{
              margin:10,
            }}>
            </TextField>
            
            <Button
            variant="contained"
            color="primary" 
            onClick={this.login}
            style={{
              margin:10,
            }}>
              Login
            </Button>
            <Typography style={{
              color:'red',
              margin:10
            }}>
              {this.state.isCorect ? <Typography> Not Corect </Typography> : null}
            </Typography>
          </Card>
        )
      }
    }   
  } 
}

export default withRouter(LoginScreen);