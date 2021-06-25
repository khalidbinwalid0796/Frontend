import React, { Component,Fragment } from 'react'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";

 class Header extends Component {

    state={
        loggedout:""
    }

    logout = () =>{
        LocalStorageHelper.storageClear();
         //this.props.setUser(null);
    }

    render() {

        let buttons;
        let profile;
        if(LocalStorageHelper.getToken('token')){
            buttons=(
                <div>
                     <Link class="nav-link" to="/"  onClick={this.logout}>Logout</Link> 
                </div>
            )
            profile=(
                <div>
                     <Link class="nav-link" to="/profile">Profile</Link> 
                </div>
            )
        }else{
            buttons=(
                <div class="form-inline my-2 my-lg-0">
                    <Link class="nav-link" to="/login">Login</Link> 
                    <Link class="nav-link" to="/register">Register</Link> 
                </div>
            )
        }

        return (
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/">
                    React With Laravel</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            {profile}
                        </li>
                        </ul>
                            {buttons}
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Header
