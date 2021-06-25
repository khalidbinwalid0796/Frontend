import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Forgot from "../pages/Forgot";
import Reset from "../pages/Reset";
import axios from 'axios';
import ApiURL from "../api/ApiURL";
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";


class AppRoute extends Component {

    constructor(props) {
        super(props);
        this.state={
            user:{},
        }
    }

    componentDidMount()
    {
          //login user credentials
          
            axios.get(ApiURL.user)
            .then((response)=> {
               this.setUser(response.data)
            })
            .catch( (error) => {
              console.log(error);
            });
          
   
    }

    setUser =(user) =>{
        this.setState({user:user})
    }

    render() {
        return (
            <Fragment>

                <Switch>
                    
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/login" component={ () =>  <Login  user={this.state.user} setUser={this.setUser}/>}/>
                    <Route exact path="/register" component={ () =>  <Register  user={this.state.user} setUser={this.setUser}/>}/>
                    <Route exact path="/profile" component={  () =>  <Profile  user={this.state.user}  /> }/>
                    <Route exact path="/forgotpassword" component={Forgot}/>
                    <Route exact path="/resetpassword" component={Reset}/>
                    

                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;