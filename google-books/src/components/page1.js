import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Page1 extends React.Component {
    state = {
        search: "",
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.handleClick(this.state.search);
    }
    onChange = (e) => {
        console.log(e.target.name, e.target.value);

        const { name, value } = e.target;

        this.setState({
            [name]: value
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
                                onChange={this.onChange}
                                value={this.state.search}
                                name="search"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" id="submitbutton" onClick={this.handleClick} key={0}>
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
};


export default Page1;

