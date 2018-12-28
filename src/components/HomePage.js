//@flow
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Split from 'grommet/components/Split';
import SideMenu from './sideMenu/sideMenu';
import AppHeader from './appHeader/appHeader';
import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';
import Deals from './deals/deals';
import Customers from './customers/customers';
import type {Props} from '../types/App';

const HomePage = ({
    deals,
    dealSearch,
    editDealSearch,
    addDeal,
    editDeal,
    deleteDeal,
    toggleDealOrder
}: Props) => {
    const newDeal = {
        _id: '',
        name: '',
        amount: 1,
        stage: 1
    };
    const [loggedIn, setLog] = useState(false);
    const [dealRow, setDealRow] = useState(0);
    const [deal, setDeal] = useState(newDeal);
    const selectDeal = (selectedDeal) => {
        setDealRow(selectedDeal);
        setDeal(deals[selectedDeal]);
    };
    const addDealAction = () => {
        setDealRow(-1);
        addDeal(deal);
    };
    const deleteDealAction = () => {
        if (dealRow < deals.length) {
            deleteDeal(deal);
        }
    };
    const toggleLogin = () => setLog(!loggedIn);
    const setDealName = (name) => setDeal({...deal, name});
    const setDealAmount = (amount) => setDeal({...deal, amount});
    const setDealStage = (stage) => setDeal({...deal, stage});
    const setDealState = (dealset) => {
        editDeal(dealset);
    };
    const editDealAction = () => {
        editDeal(deal);
    };
    const setDealSearch = (dealSearched) => {
        editDealSearch(dealSearched);
    };
    const reverseDealsAction = () => {
        toggleDealOrder();
    };
    if (loggedIn === false) {
        return (
            <LoginPage toggleLogin={toggleLogin}/>
        );
    } else {
        return (
            <Router>
                <div className='App'>
                    <AppHeader/>
                    <Split fixed={false}>
                        <SideMenu toggleLogin={toggleLogin}/>
                        <Switch>
                            <Route
                                path={'/Deals'}
                                component={() => (
                                    <Deals
                                        deals={deals}
                                        loggedIn={loggedIn}
                                        dealRow={dealRow}
                                        deal={deal}
                                        dealSearch={dealSearch}
                                        selectDeal={selectDeal}
                                        setDealSearch={setDealSearch}
                                        setDealName={setDealName}
                                        setDealAmount={setDealAmount}
                                        setDealStage={setDealStage}
                                        setDealState={setDealState}
                                        editDealAction={editDealAction}
                                        addDealAction={addDealAction}
                                        deleteDealAction={deleteDealAction}
                                        reverseDealsAction={reverseDealsAction}
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
};

const RightBlock = () => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    />
);

const LoginPage = ({toggleLogin}) => (
    <Box
        colorIndex='light-2'
        full='vertical'
        align='center'
    >
        <LoginForm onSubmit={toggleLogin}/>
    </Box>
);

export default HomePage;