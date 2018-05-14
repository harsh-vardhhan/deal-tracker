//@flow
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';
import AppHeader from './../components/appHeader/appHeader';
import SideMenu from './../components/sideMenu/sideMenu';
import Deals from './../components/deals/deals';
import Customers from './../components/customers/customers';
import {getDeals, addDeal, deleteDeal, editDeal} from '../actions/deal';
import {editDealSearch} from '../actions/dealSearch';
import {toggleDealOrder} from '../actions/dealOrder';
import {filterDeal} from '../selectors/deals';
import type {
    GET_DEALS_ACTION,
    ADD_DEALS_ACTION,
    DELETE_DEAL_ACTION,
    EDIT_DEAL_ACTION,
    EDIT_DEAL_SEARCH_ACTION,
    TOGGLE_ORDER_ACTION
} from '../types/Action';
import type {Deals as DealsType} from '../types/Deals';
import type {Deal as DealType} from '../types/Deal';
import type {State as StateType} from '../types/State';
import type {Dispatch} from '../types/Store';

type Props = {
    actions: {
        reverseDeals: (DealsType) => void,
        getDeals: () => GET_DEALS_ACTION,
        addDeal: (DealType) => ADD_DEALS_ACTION,
        deleteDeal: (DealType) => DELETE_DEAL_ACTION,
        editDeal: (DealType) => EDIT_DEAL_ACTION,
        editDealSearch: (string) => EDIT_DEAL_SEARCH_ACTION,
        toggleDealOrder: () => TOGGLE_ORDER_ACTION
    },
    deals: DealsType,
    dealSearch: string
};

type State = {
    loggedIn: bool,
    dealRow: number,
    deal: {
        _id: string,
        name: string,
        amount: number,
        stage: number
    }
};

class App extends Component<Props, State> {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            dealRow: 0,
            deal: {
                _id: '',
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
        const _id = '';
        this.setState({dealRow: -1});
        this.props.actions.addDeal({_id, name, amount, stage});
    }

    deleteDealAction = () => {
        const {_id, name, amount, stage} = this.state.deal;
        this.props.actions.deleteDeal({_id, name, amount, stage});
    }

    editDealAction = () => {
        const {dealRow} = this.state;
        const {deals} = this.props;
        const {_id, name, amount, stage} = this.state.deal;
        if (dealRow < deals.length) {
            this.props.actions.editDeal({_id, name, amount, stage});
        }
    }

    selectDeal = (selectedDeal) => {
        const {deals} = this.props;
        this.setState({
            dealRow: selectedDeal,
            deal: deals[selectedDeal]
        });
    }

    setDealName = (name) => this.setState({
        deal: {...this.state.deal, name}
    })

    setDealAmount = (amount) => this.setState({
        deal: {...this.state.deal, amount}
    })

    setDealStage = (stage) => {
        this.setState({
            deal: {...this.state.deal, stage}
        });
    }

    setDealState = (deal) => {
        this.props.actions.editDeal(deal);
    }

    setDealSearch = (dealSearch) => {
        this.props.actions.editDealSearch(dealSearch);
    }

    toggleLogin = () => {
        this.setState({loggedIn: !this.state.loggedIn});
    }

    reverseDealsAction = () => {
        this.props.actions.toggleDealOrder();
    }

    render() {
        const {deals, dealSearch} = this.props;
        const {loggedIn} = this.state;
        if (loggedIn === false) {
            return (
                <LoginPage toggleLogin={this.toggleLogin}/>
            );
        } else {
            return (
                <Router>
                    <div className='App'>
                        <AppHeader/>
                        <Split fixed={false}>
                            <SideMenu toggleLogin={this.toggleLogin}/>
                            <Switch>
                                <Route
                                    path={'/Deals'}
                                    component={() => (
                                        <Deals
                                            deals={deals}
                                            dealSearch={dealSearch}
                                            {...this.state}
                                            {...this}
                                        />
                                    )}
                                />
                                <Route
                                    path={'/Customers'}
                                    component={() => <Customers/>}
                                />
                            </Switch>
                            <RightBlock/>
                        </Split>
                    </div>
                </Router>
            );
        }
    }
}

const LoginPage = ({toggleLogin}) => (
    <Box
        colorIndex='light-2'
        full='vertical'
        align='center'
    >
        <LoginForm onSubmit={toggleLogin}/>
    </Box>
);

const RightBlock = () => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    />
);

const mapStateToProps = (state: StateType) => ({
    deals: filterDeal(state),
    dealSearch: state.dealSearchReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({

    //$FlowFixMe
    actions: bindActionCreators({
        getDeals,
        addDeal,
        deleteDeal,
        editDeal,
        editDealSearch,
        toggleDealOrder
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
