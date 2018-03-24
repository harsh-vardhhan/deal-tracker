//@flow
import React from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

type ActionButtonsType = {
    addDealAction: () => void,
    deleteDealAction: () => void,
    editDealAction: () => void
};

const ActionButtons = ({addDealAction, deleteDealAction, editDealAction}: ActionButtonsType) => (
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
            onClick={deleteDealAction}
        />
        <Button
            label='Save'
            href='#'
            onClick={editDealAction}
        />
    </Box>
);

export default ActionButtons;