//@flow
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import AppHeader from './../components/appHeader/appHeader';
import SideMenu from './../components/sideMenu/sideMenu';
import DealRoute from './../components/deals/dealRoute';
import Customers from './../components/customers/customers';
import {getDeals, addDeal, deleteDeal, editDeal} from '../actions/deal';
import type {GET_DEALS_ACTION, ADD_DEALS_ACTION, DELETE_DEAL_ACTION, EDIT_DEAL_ACTION} from '../types/Action';
import type {Deals as DealsType} from '../types/Deals';
import type {Deal as DealType} from '../types/Deal';
import type {State as StateType} from '../types/State';

type Props = {
    actions: {
        getDeals: () => GET_DEALS_ACTION,
        addDeal: (DealType) => ADD_DEALS_ACTION,
        deleteDeal: (number) => DELETE_DEAL_ACTION,
        editDeal: (DealType, number) => EDIT_DEAL_ACTION
    },
    deals: DealsType
};

type State = {
    dealRow: number,
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
            dealRow: 0,
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

    addDealAction = () => {
        const {name, amount, stage} = this.state.deal;
        this.setState({dealRow: -1});
        this.props.actions.addDeal({name, amount, stage});
    }

    deleteDealAction = () => {
        const {dealRow} = this.state;
        this.props.actions.deleteDeal(dealRow);
    }

    editDealAction = () => {
        const {dealRow} = this.state;
        const {deals} = this.props;
        const {name, amount, stage} = this.state.deal;
        if (dealRow < deals.length) {
            this.props.actions.editDeal({name, amount, stage}, dealRow);
        }
    }

    selectDeal = (selectedDeal: number) => {
        const {deals} = this.props;
        this.setState({
            dealRow: selectedDeal,
            deal: deals[selectedDeal]
        });
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
        const {deals} = this.props;
        const {deal, dealRow} = this.state;
        return (
            <Router>
                <div className='App'>
                    <AppHeader/>
                    <Split fixed={false}>
                        <SideMenu/>
                        <Switch>
                            <DealRoute
                                deal={deal}
                                deals={deals}
                                dealRow={dealRow}
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

const mapStateToProps = (state: StateType) => ({
    deals: state.dealReducer
});

const mapDispatchToProps = (dispatch) => ({

    //$FlowFixMe
    actions: bindActionCreators({
        getDeals,
        addDeal,
        deleteDeal,
        editDeal
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
