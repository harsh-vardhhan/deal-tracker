//@flow
import React from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

type ActionButtonsType = {
    addDealAction: () => void
};

const ActionButtons = ({addDealAction}: ActionButtonsType) => (
    <Box
        pad='medium'
        direction='row'
    >
        <Button
            label='Add'
            href='#'
            onClick={addDealAction}
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