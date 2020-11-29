import React, {Component} from 'react';
import {Nav,Navbar, NavItem, NavbarToggler, Collapse, NavItemNavbar, NavbarBrand, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Jae's Cafe</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;