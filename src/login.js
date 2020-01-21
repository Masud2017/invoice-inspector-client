import React from 'react';
import Header from './header';
import Footer from './footer';

const LogIn = () => {
    return (
        <div>
            <Header/>
            <form action = "#" method = "post" className = "mt-sm-4 mb-sm-4">
                <label for = 'user'>Please enter your username:</label>
                <input type = "email" placeholder = "Enter your email / user"></input>
                <label for = "pass">Please enter your password</label>
                <input type = "password" placeholder = "Enter your password"></input>
                <input type = "submit" value = "Login"></input>
            </form>
            <Footer/>
        </div>
    );
}
export default LogIn;