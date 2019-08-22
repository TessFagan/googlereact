import React from "react";
import Navbar from 'react-bootstrap/Navbar';

class page1 extends Component {

    render() {
        return (
            <div>
                <Navbar>
                    <h1>Google Book API!</h1>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link">Current Score:</a>
                            </li>
                        </ul>
                    </div>
                </Navbar>
            </div >
        );
    }
}






export default page1;

