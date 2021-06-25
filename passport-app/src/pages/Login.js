import React, { Component,Fragment } from 'react'
import Header from "../components/common/Header";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import ApiURL from "../api/ApiURL";
 class Login extends Component {

    state={
        email:'',
        password:'',
        message:''
    }

    //after form submit
    formSubmit  = (e) =>{
        e.preventDefault();
        const data={
            email:this.state.email,
            password:this.state.password
        }

        axios.post(ApiURL.login, data)
          .then((response)=> {
              let token = response.data.token;
                LocalStorageHelper.setToken(token);       //token store on local storage
                this.setState({
                    loggedIn:true
                })
                this.props.setUser(response.data.user);
          })
          .catch( (error) => {
              this.setState({message:error.response.data.message})
          });
    }

    render() {

        //after login redirect profile
        if(this.state.loggedIn){
            return <Redirect  to={'/profile'} />
        }

         //checking authorization(middleware)
         if(LocalStorageHelper.getToken('token')){
            return <Redirect  to={'/profile'} />
        }

        //login error message
        let error="";
        if(this.state.message){
            error=(
                <div>
                    <div class="alert alert-danger" role="alert">
                        {this.state.message}
                    </div>
                </div>
            )
        }

        return (
            <Fragment>
                    <Header/>
                    <br></br>
                   <div class="row">
                       <div class="jumbotron col-lg-4 offset-lg-4">
                       <h3 class="text-center">Login Account</h3>
                       {error}
                       <form onSubmit={this.formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" aria-describedby="emailHelp"  required onChange={(e)=>{this.setState({email:e.target.value})}}/>                 
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" required onChange={(e)=>{this.setState({password:e.target.value})}}/>
                            </div>
                            <button type="submit" class="btn btn-success btn-block">LOGIN</button><br></br>
                            Forgot My Password <Link to="/forgotpassword">Click here</Link><br></br>
                            I don't have an account <Link to="/register">Register Now</Link>
                        </form>
                       </div>
                   </div>
            </Fragment>
        )
    }
}

export default Login
