//@flow
import React from 'react';
import {DropTarget} from 'react-dnd';
import Box from 'grommet/components/Box';
import DealBoardItem from './dealBoardItem';
import type {Deals} from './../../../types/Deals';

type DealBoardSpaceType = {
    deals: Deals
};

const updatedStage = null;

const dealTarget = {
    drop(props, monitor) {
        if (monitor.getItem().value.Stage !== updatedStage) {
            monitor.getItem().value.Stage = updatedStage;
            props.dropDeal(monitor.getItem().value);
        }
    }
};

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

const DealBoardSpace = ({deals}: DealBoardSpaceType) => (
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
                    style={{height: 500, overflow: 'auto'}}
                >
                    {deals.map((deal, j) => {
                        if (deal.stage === value.value) {
                            return (
                                <DealBoardItem
                                    key={j}
                                    deal={deal}
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
);

const Stages = [
    {value: 0, label: 'Qualifying'},
    {value: 1, label: 'Developing'},
    {value: 2, label: 'Proposing'},
    {value: 3, label: 'Negotiating'},
    {value: 4, label: 'Closed'}
];

export default DropTarget('deal', dealTarget, collect)(DealBoardSpace);