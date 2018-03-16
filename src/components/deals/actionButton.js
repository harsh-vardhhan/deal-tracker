//@flow
import React from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const ActionButtons = () => (
    <Box
        pad='medium'
        direction='row'
    >
        <Button
            label='Add'
            href='#'
        />
        <Button
            label='Delete'
            href='#'
        />
        <Button
            label='Save'
            href='#'
        />
    </Box>
);

export default ActionButtons;