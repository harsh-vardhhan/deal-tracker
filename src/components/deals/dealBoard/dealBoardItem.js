//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import type {Deal} from './../../../types/Deal';

type DealBoardItemType = {
    deal: Deal
};

const DealBoardItem = ({deal}: DealBoardItemType) => (
    <Box
        pad={{vertical: 'small'}}
    >
        <Box
            colorIndex='accent-1-a'
            style={{height: 50, width: 180}}
        >
            <Value
                label={deal.name}
                value={deal.amount}
                size='xsmall'
                align='center'
                units='$'
            >
                {deal.amount}
            </Value>
        </Box>
    </Box>
);

export default DealBoardItem;