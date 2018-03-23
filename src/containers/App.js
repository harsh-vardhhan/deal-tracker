//@flow
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import AppHeader from './../components/appHeader/appHeader';
import SideMenu from './../components/sideMenu/sideMenu';
import Deals from './../components/deals/deals';
import Customers from './../components/customers/customers';
import {getDeals} from '../actions/deal';
import type {GET_DEALS_ACTION} from '../types/Action';

type Props = {
    actions: {
        getDeals: () => GET_DEALS_ACTION
    }
};

type State = {
    deal: {
        name: string,
        amount: number,
        stage: number
    }
};

//TODO use React-beautiful-dnd

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

    componentDidMount() {
        this.props.actions.getDeals();
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
        return (
            <Router>
                <div className='App'>
                    <AppHeader/>
                    <Split fixed={false}>
                        <SideMenu/>
                        <Switch>
                            <DealRoute
                                deal={deal}
                                {...this}
                            />
                            <CustomerRoute/>
                        </Switch>
                        <RightBlock/>
                    </Split>
                </div>
            </Router>
        );
    }
}

const RightBlock = () => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    />
);

const CustomerRoute = () => (
    <Route
        path='/Customers'
        component={Customers}
    />
);

const DealRoute = ({deal, setDealName, setDealAmount, setDealStage}) => (
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
);

const mapDispatchToProps = (dispatch) => ({

    //$FlowFixMe
    actions: bindActionCreators({
        getDeals
    }, dispatch)
});

export default connect(
    null,
    mapDispatchToProps
)(App);
