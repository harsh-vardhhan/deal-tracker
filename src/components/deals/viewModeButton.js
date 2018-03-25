//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import {Link} from 'react-router-dom';

const ViewModeButton = () => (
    <Box
        pad='large'
        direction='row'
    >
        <Link to={'/Deals/DealTableRoute'}>
            <Button
                label='Table'
                href='#'
            />
        </Link>
        <Link to={'/Deals/DealBoardRoute'}>
            <Button
                label='Board'
                href='#'
            />
        </Link>
    </Box>
);

export default ViewModeButton;