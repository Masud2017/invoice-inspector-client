import React from 'react';
import './header.css';
import LogIn from './login';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
//import axios from 'axios';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Router>
                <div className = "nav mt-sm-2 mb-sm-4">
                    <img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qarc563RNh8mqvUFtkG3EQHaHa%26pid%3DApi&f=1" height = "40px" width = "40px" alt = "sorry something went wrong"/>
                    <Link className = "nav-link ml-auto btn btn-outline-secondary mr-sm-2">Home</Link>
                    <Link to = "/login" className = "nav-link btn btn-outline-secondary mr-sm-2">Login</Link>
                    <a href = "#" className = "nav-link btn btn-outline-secondary mr-sm-2">Signup</a>
                    <a href = "#" className = "nav-link btn btn-outline-secondary mr-sm-2">About us</a>
                </div>
                <Switch>
                    <Route path = '/login'>
                        <LogIn/>
                    </Route>
                </Switch>
                </Router>

            </div>
        );
    }
}
export default Header;