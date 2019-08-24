import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Page2 extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <h1>Google Book API!</h1>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://googlebook123456.herokuapp.com/">Back to Search</a>
                            </li>
                        </ul>
                    </div>
                </Navbar>
                <Jumbotron>
                    <h3>Saved Books:</h3>
                </Jumbotron>

            </div >
        );
    }
}


export default Page2;