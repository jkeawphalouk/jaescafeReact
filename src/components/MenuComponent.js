import React ,{Component} from 'react';

//import the state from the store here


class Menu extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="entireMenu col-md-6">
                <h3>Menu</h3>
                <div className="row">
                    <div className="col">
                        Iced Coffee
                    </div>
                    <div className="col">
                        Hot Coffee
                    </div>
                    <div className="col">
                        Food
                    </div>
                    <div className="col">
                        Specialty Drinks
                    </div>
                </div>
                <div className="menuItem row">
                    <div className="col col-md-3">
                        <p>Iced Late</p>
                    </div>
                </div>
                <div className="menuItem row">
                    <div className="col col-md-3">
                        <p>Iced Americano</p>
                    </div>
                </div>
                <div className="menuItem row">
                    <div className="col col-md-3">
                        <p>Iced Mocha</p>
                    </div>
                </div>
                <div className="menuItem row">
                    <div className="col col-md-3">
                        <p>Iced Frappe</p>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Menu;