import React, { Component,Fragment } from 'react'
import Header from "../components/common/Header";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";
import ApiURL from "../api/ApiURL";
import { Redirect } from 'react-router-dom';

 class Forgot extends Component {

    state={
        email:'',
        message:''
    }

    formSubmit =(e)=>{
        e.preventDefault();
        const data={
            email:this.state.email,
        }

        axios.post(ApiURL.forgotpassword, data)
          .then((response)=> {
              this.setState({message:response.data.message})
              document.getElementById("forgotform").reset();
          })
          .catch( (error) => {
                this.setState({message:error.response.data.message})
          });
    }

    render() {

        if(LocalStorageHelper.getToken('token')){
            return <Redirect  to={'/profile'} />
        }

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
                <h3 class="text-center">Forgot Password</h3>
                <form  onSubmit={this.formSubmit} id="forgotform">
                    {error}
                     <div class="form-group">
                         <label for="exampleInputEmail1">Email address</label>
                         <input type="email" class="form-control" name="email" onChange={(e)=>{this.setState({email:e.target.value})}} required />                 
                     </div>
                     <button type="submit" class="btn btn-success btn-block">SUBMIT</button>
                     </form>
                </div>
            </div>
           </Fragment>
        )
    }
}

export default Forgot
