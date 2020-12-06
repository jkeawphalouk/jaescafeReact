import React, {Component} from 'react';
import {Switch,Route, Redirect, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import{connect} from 'react-redux';
import Menu from './MenuComponent';



class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Menu />
            </div>
        );
    }
}



export default Main;