//@flow
import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
import Box from 'grommet/components/Box';
import DealBoardItem from './dealBoardItem';
import ItemTypes from './itemTypes';
import type {Deals} from './../../../types/Deals';
import type {Deal as DealType} from './../../../types/Deal';

type Props = {
    deals: Deals,
    setDealStage: (number) => void,
    setDealState: (DealType) => void,
    connectDropTarget: any
};

let updatedStage = null;

const dealTarget = {
    drop(props, monitor) {
        props.setDealState({
            ...monitor.getItem().deal,
            stage: updatedStage
        });
    }
};

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

class DealBoardSpace extends Component<Props> {
    render() {
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div>
                <Box
                    direction='row'
                    style={{width: '1000px'}}
                >
                    {Stages.map((value, i) => {
                        return (
                            <Box
                                key={i}
                                direction='column'
                                justify='start'
                                align='center'
                                pad={{vertical: 'small'}}
                                margin='small'
                                size='medium'
                                colorIndex='light-2'
                                style={{height: 480, overflow: 'auto'}}
                                onDrop={() => {
                                    updatedStage = i;
                                    return i;
                                }}
                            >
                                {this.props.deals.map((deal, j) => {
                                    if (deal.stage === value.value) {
                                        return (
                                            <DealBoardItem
                                                key={j}
                                                deal={deal}
                                                value={value}
                                                setDealState={this.props.setDealState}
                                                onDrop={() => {
                                                    this.props.setDealStage(i);
                                                    return i;
                                                }}
                                            />
                                        );
                                    } else {
                                        return <div key={j}/>;
                                    }
                                })}
                            </Box>
                        );
                    })}
                </Box>
            </div>
        );
    }
}

const Stages = [
    {value: 0, label: 'Qualifying'},
    {value: 1, label: 'Developing'},
    {value: 2, label: 'Proposing'},
    {value: 3, label: 'Negotiating'},
    {value: 4, label: 'Closed'}
];

export default DropTarget(ItemTypes.DEAL, dealTarget, collect)(DealBoardSpace);