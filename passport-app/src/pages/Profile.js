import React, { Component,Fragment } from 'react'
import Header from "../components/common/Header";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

 class Profile extends Component {
    render() {
        let name;
        let email;
        if(this.props.user){
            name =this.props.user.name;
            email =this.props.user.email;
        }

        return (
            <Fragment>
                <Header/>
                <br></br>
                <div class="row">
                    <div class="jumbotron col-lg-4 offset-lg-4">
                    <h3 class="text-center">MY PROFILE</h3>
                    <ul class="list">
                        <li> Name:{name}</li>
                        <li> Email:{email}</li>
                    </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Profile
