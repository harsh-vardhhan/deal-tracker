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
};

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

type TypeStage = {
    option: {
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
                    options={Stages}
                    value={deal.stage}
                    onChange={(_stage: TypeStage) => setDealStage(_stage.option.value)}
                />
            </FormField>
        </Box>
    );
};

const Stages = [
    {value: 0, label: 'Qualifying'},
    {value: 1, label: 'Developing'},
    {value: 2, label: 'Proposing'},
    {value: 3, label: 'Negotiating'},
    {value: 4, label: 'Closed'}
];

export default DealsForm;
