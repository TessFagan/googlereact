import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { List, ListItem } from "./ListItem";
import Card from 'react-bootstrap/Card'
import "./style.css";


class Page1 extends React.Component {
    state = {
        response: []
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("submit clicked =>" + document.getElementById("search").value);
        console.log(document.getElementById("search").value)

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${document.getElementById("search").value}`).then((response) => {
            console.log(response.data)
            this.setState({
                response: response.data.items
            });
        });

    }


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
                            <Form.Control type="search" placeholder="Search for a book here"
                                name="search"
                                id="search"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" id="submitbutton" onClick={this.handleClick} key={0}>
                            Submit
                            </Button>
                    </Form>
                </Jumbotron>
                <Jumbotron>
                    <h3>Results</h3>
                    {this.state.response.length ? (
                        <List>
                            {this.state.response.map(item => (
                                <ListItem key={item.id}>
                                    <Card id="card">
                                        <Card.Img id="img-container" src={item.volumeInfo.imageLinks.thumbnail} />
                                        <Card.Body>
                                            <Card.Title> {item.volumeInfo.title}</Card.Title>
                                            <Card.Text>
                                                {item.volumeInfo.authors ? (item.volumeInfo.authors) : ("no author")}
                                                {item.volumeInfo.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>

                        )}
                </Jumbotron>

            </div >
        );
    }
};

export default Page1;

