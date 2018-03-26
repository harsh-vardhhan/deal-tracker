//@flow
import React, {Component} from 'react';
import DealBoardHeader from './dealBoardHeader';
import DealBoardSpace from './dealBoardSpace';
import type {Deals} from './../../../types/Deals';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

type Props = {
    deals: Deals
};

class DealBoard extends Component<Props> {
    render() {
        return (
            <div>
                <DealBoardHeader/>
                <DealBoardSpace
                    deals={this.props.deals}
                />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(DealBoard);