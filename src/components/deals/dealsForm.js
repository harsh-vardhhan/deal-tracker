//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import NumberInput from 'grommet/components/NumberInput';

type TypeDealForm = {
    deal: {
        name: string,
        amount: number,
        stage: number
    },
    setDealName: (string) => void,
    setDealAmount: (number) => void,
    setDealStage: (number) => void
}

type TypeName = {
    target: {
        value: string
    }
};

type TypeAmount = {
    target: {
        value: number
    }
};

const DealsForm = ({deal, setDealName, setDealAmount, setDealStage}: TypeDealForm) => {
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
                    value={deal.name}
                    onDOMChange={(_name: TypeName) => setDealName(_name.target.value)}
                />
            </FormField>
            <FormField>
                <NumberInput
                    type='number'
                    value={deal.amount}
                    onChange={(_amount: TypeAmount) => setDealAmount(_amount.target.value)}
                />
            </FormField>
            <FormField>
                <Select
                    placeHolder='None'
                    options={stages}
                    value={deal.stage}
                    onChange={(_stage) => setDealStage(_stage.option.value)}
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