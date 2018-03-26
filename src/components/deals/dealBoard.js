//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import type {Deals} from './../../types/Deals';

const Stages = [
    {value: 0, label: 'Qualifying'},
    {value: 1, label: 'Developing'},
    {value: 2, label: 'Proposing'},
    {value: 3, label: 'Negotiating'},
    {value: 4, label: 'Closed'}
];

type DealBoardType = {
    deals: Deals
};

const DealBoard = ({deals}: DealBoardType) => {
    return (
        <div>
            <DealBoardHeader/>
            <Box
                direction='Column'
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
                            {deals.map((item, j) => {
                                if (item.stage === value.value) {
                                    return (
                                        <DealBoardItem
                                            key={j}
                                            item={item}
                                        />
                                    );
                                } else {
                                    return <div/>;
                                }
                            })}
                        </Box>
                    );
                })}
            </Box>
        </div>
    );
};

const DealBoardHeader = () => (
    <Box
        direction='Column'
        style={{width: '1000px'}}
    >
        {Stages.map((value, i) => {
            return (
                <Box
                    key={i}
                    direction='row'
                    justify='start'
                    align='center'
                    pad='small'
                    margin='small'
                    size='medium'
                    colorIndex='neutral-2-t'
                >
                    <Value
                        value={value.label}
                        size='xsmall'
                    />
                </Box>
            );
        })}
    </Box>
);

const DealBoardItem = ({item}) => (
    <Box
        pad={{vertical: 'small'}}
    >
        <Box
            colorIndex='accent-1-a'
            style={{height: 50, width: 180}}
        >
            <Value
                label={item.name}
                value={item.amount}
                size='xsmall'
                align='center'
                units='$'
            >
                {item.amount}
            </Value>
        </Box>
    </Box>
);

export default DealBoard;