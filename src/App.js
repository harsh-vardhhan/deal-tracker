import React, {Component} from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header>
                    <Title>
                        {'Deal Tracker'}
                    </Title>
                </Header>
            </div>
        );
    }
}

export default App;
