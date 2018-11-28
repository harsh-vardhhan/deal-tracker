//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/grommet/grommet-hpe.min.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store/configureStore';

//$FlowFixMe
//const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,

    //$FlowFixMe
    document.getElementById('root')
);
