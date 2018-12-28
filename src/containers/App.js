//@flow
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDeals, addDeal, deleteDeal, editDeal} from '../actions/deal';
import {editDealSearch} from '../actions/dealSearch';
import {toggleDealOrder} from '../actions/dealOrder';
import {filterDeal} from '../selectors/deals';
import type {State as StateType} from '../types/State';
import type {Dispatch} from '../types/Store';
import type {AppType} from '../types/App';
import HomePage from '../components/HomePage';

class App extends Component<AppType> {
    componentDidMount() {
        this.props.actions.getDeals();
    }

    render() {
        return (
            <HomePage
                {...this.props}
                {...this.props.actions}
            />
        );
    }
}

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
