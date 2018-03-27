//@flow
import React, {Component} from 'react';
import DealBoardHeader from './dealBoardHeader';
import DealBoardSpace from './dealBoardSpace';
import type {Deals} from './../../../types/Deals';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import type {Deal as DealType} from './../../../types/Deal';

type Props = {
    deals: Deals,
    setDealState: (DealType) => void
};

class DealBoard extends Component<Props> {
    render() {
        return (
            <div>
                <DealBoardHeader/>
                <DealBoardSpace
                    deals={this.props.deals}
                    setDealState={this.props.setDealState}
                />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(DealBoard);