//@flow
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import AppHeader from './../components/appHeader';
import SideMenu from './../components/sideMenu/sideMenu';
import Deals from './../components/deals/deals';
import Customers from './../components/customers/customers';

type Props = {};

type State = {
    deal: {
        name: string,
        amount: number,
        stage: number
    }
};

class App extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            deal: {
                name: '',
                amount: 1,
                stage: 1
            }
        };
    }

    setDealName = (name: string) => this.setState({
        deal: {...this.state.deal, name}
    });

    setDealAmount = (amount: number) => this.setState({
        deal: {...this.state.deal, amount}
    });

    setDealStage = (stage: number) => this.setState({
        deal: {...this.state.deal, stage}
    });

    render() {
        const {deal} = this.state;
        const {
            setDealName,
            setDealAmount,
            setDealStage
        } = this;
        return (
            <Router>
                <div className='App'>
                    <AppHeader/>
                    <Split
                        fixed={false}
                    >
                        <SideMenu/>
                        <Switch>
                            <Route
                                path='/Deals'
                                component={() => (
                                    <Deals
                                        deal={deal}
                                        setDealName={setDealName}
                                        setDealAmount={setDealAmount}
                                        setDealStage={setDealStage}
                                    />
                                )}
                            />
                            <Route
                                path='/Customers'
                                component={Customers}
                            />
                        </Switch>
                        <Box
                            justify='center'
                            align='center'
                            pad='medium'
                        />
                    </Split>
                </div>
            </Router>
        );
    }
}

export default App;
