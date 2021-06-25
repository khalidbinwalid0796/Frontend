import React, { Component,Fragment } from 'react'
import Header from "../components/common/Header";
import axios from 'axios'
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";
import ApiURL from "../api/ApiURL";
import { Redirect } from 'react-router-dom';

 class Reset extends Component {

    state={
        token:'',
        email:'',
        password:'',
        password_confirmation:'',
        message:''
    }

    formSubmit =(e)=>{
        e.preventDefault();
        const data={
            token:this.state.token,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation,
        }

        axios.post(ApiURL.resetpassword, data)
          .then((response)=> {
              this.setState({message:response.data.message})
              document.getElementById("formsubmit").reset();
          })
          .catch( (error) => {
                this.setState({message:error.response.data.message})
          });
    }

    render() {

        let error="";
        if(this.state.message){
            error=(
                <div>
                    <div class="alert alert-primary" role="alert">
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
        <h3 class="text-center">Reset Password</h3>
        {error}
        <form onSubmit={this.formSubmit} id="formsubmit">
            <div class="form-group">
                 <label for="exampleInputEmail1">PIN Code</label>
                 <input type="text" class="form-control" name="token" onChange={(e)=>{this.setState({token:e.target.value})}} required />                 
             </div>
             <div class="form-group">
                 <label for="exampleInputEmail1">Email address</label>
                 <input type="email" class="form-control" name="email" onChange={(e)=>{this.setState({email:e.target.value})}} required />                 
             </div>
             <div class="form-group">
                 <label for="exampleInputPassword1">New Password</label>
                 <input type="password" class="form-control" name="password" onChange={(e)=>{this.setState({password:e.target.value})}} required />
             </div>
             <div class="form-group">
                 <label for="exampleInputPassword1">Confirm Password</label>
                 <input type="password" class="form-control" name="password_confirmation" onChange={(e)=>{this.setState({password_confirmation:e.target.value})}} required />
             </div>
             <button type="submit" class="btn btn-success btn-block">SUBMIT</button><br></br>
        
             </form>
        </div>
    </div>
</Fragment>
        )
    }
}

export default Reset
