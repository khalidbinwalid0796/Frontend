import React, { Component,Fragment } from 'react'
import Header from "../components/common/Header";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";
import ApiURL from "../api/ApiURL";

 class Register extends Component {

    state={
        name:'',
        email:'',
        mobile:'',
        password:'',
        password_confirmation:'',
        message:''
    }

    formSubmit =(e)=>{
        e.preventDefault();
        const data={
            name:this.state.email,
            email:this.state.email,
            mobile:this.state.mobile,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation
        }

        axios.post(ApiURL.register, data)
          .then((response)=> {
                localStorage.setItem('token',response.data.token);       //token store on local storage
                this.setState({
                    loggedIn:true
                })
                this.props.setUser(response.data.user);
          })
          .catch( (error) => {
            console.log(error);
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
        return (
            <Fragment>
                    <Header/>
                    <br></br>
                    <div class="row">
                       <div class="jumbotron col-lg-4 offset-lg-4">
                       <h3 class="text-center">Register Account</h3>
                       <form  onSubmit={this.formSubmit}>
                           <div class="form-group">
                                <label for="exampleInputEmail1">User Name</label>
                                <input type="text" class="form-control" name="name" required   onChange={(e)=>{this.setState({name:e.target.value})}} />                 
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" required  onChange={(e)=>{this.setState({email:e.target.value})}} />                 
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile</label>
                                <input type="text" class="form-control" name="mobile" required  onChange={(e)=>{this.setState({mobile:e.target.value})}} />                 
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" required  onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" class="form-control" name="password_confirmation" required  onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} />
                            </div>
                            <button type="submit" class="btn btn-success btn-block">REGISTER</button><br></br>
                          I already have an account <Link to="/login">Login Now</Link>
                            </form>
                       </div>
                   </div>
            </Fragment>
        )
    }
}

export default Register
