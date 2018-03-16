//@flow
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Split from 'grommet/components/Split';
import AppHeader from './../components/appHeader';
import SideMenu from './../components/sideMenu/sideMenu';
import Deals from './../components/deals';
import Customers from './../components/customers';

class App extends Component<{}> {
    render() {
        return (
            <Router>
                <div className='App'>
                    <AppHeader/>
                    <Split>
                        <SideMenu/>
                        <Switch>
                            <Route
                                path='/Deals'
                                component={Deals}
                            />
                            <Route
                                path='/Customers'
                                component={Customers}
                            />
                        </Switch>
                    </Split>
                </div>
            </Router>
        );
    }
}

export default App;