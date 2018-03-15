//@flow
import React from 'react';
import Anchor from 'grommet/components/Anchor';
import {Link} from 'react-router-dom';
import Customers from '../customers';

const CustomersLink = () => (
    <Link
        to={'/Customers'}
        component={Customers}
    >
        <Anchor
            href='#'
            className='active'
        >
            {'Customers'}
        </Anchor>
    </Link>
);

export default CustomersLink;