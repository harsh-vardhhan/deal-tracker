//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';

type TypeDealForm = {
    stage: number
}

const DealsForm = ({stage}: TypeDealForm) => {
    return (
        <Box
            justify='center'
            align='center'
            pad='medium'
        >
            <h3>{'Form'}</h3>
            <FormField>
                <TextInput
                    placeHolder='Deal Name'
                />
            </FormField>
            <FormField>
                <TextInput
                    type='number'
                />
            </FormField>
            <FormField>
                <Select
                    placeHolder='None'
                    options={stages}
                    value={stage}
                />
            </FormField>
        </Box>
    );
};

const stages = [
    {
        value: 1,
        label: 'Appointment Scheduled'
    },
    {
        value: 2,
        label: 'Qualified To Buy'
    },
    {
        value: 3,
        label: 'Presentation Scheduled'
    },
    {
        value: 4,
        label: 'Decision Maker Brought-In'
    },
    {
        value: 5,
        label: 'Contract Sent'
    },
    {
        value: 6,
        label: 'Closed Won'
    },
    {
        value: 7,
        label: 'Closed Lost'
    }
];

export default DealsForm;