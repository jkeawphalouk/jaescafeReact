import React, {Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';


class Main extends Component{
    render(){
        return(
            <div>
                <Header />
            </div>
        );
    }
}

export default Main;