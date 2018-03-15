import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Split from 'grommet/components/Split';
import SideMenu from './components/sideMenu/sideMenu';
import Deals from './components/deals';
import Customers from './components/customers';

class App extends Component {
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

const AppHeader = () => (
    <Header
        size='small'
        colorIndex='neutral-1-t'
        pad='medium'
    >
        <Title>{'Deal Tracker'}</Title>
    </Header>
);

export default App;