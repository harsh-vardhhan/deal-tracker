//@flow
import React from 'react';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';

const Form = () => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    >
        <h3>{'Form'}</h3>
        <FormField>
            <TextInput
                placeHolder='Name'
            />
        </FormField>
        <FormField>
            <TextInput
                type='number'
            />
        </FormField>
        <FormField>
            <TextInput
                placeHolder='Stage'
            />
        </FormField>
    </Box>
);

export default Form;