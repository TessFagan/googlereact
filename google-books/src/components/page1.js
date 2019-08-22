import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class page1 extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <h1>Google Book API!</h1>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">Saved Books</a>
                            </li>
                        </ul>
                    </div>
                </Navbar>
                <Jumbotron>
                    <Form>
                        <Form.Group controlId="Searchbar">
                            <Form.Label> <h3>Search Bar:</h3></Form.Label>
                            <Form.Control type="search" placeholder="Search for a book here" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Jumbotron>
                <Jumbotron>
                    <h3>Results:</h3>
                </Jumbotron>

            </div >
        );
    }
}


export default page1;

