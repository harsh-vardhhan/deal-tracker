//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';

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

const Stages = [
    {value: 0, label: 'Qualifying'},
    {value: 1, label: 'Developing'},
    {value: 2, label: 'Proposing'},
    {value: 3, label: 'Negotiating'},
    {value: 4, label: 'Closed'}
];

export default DealBoardHeader;