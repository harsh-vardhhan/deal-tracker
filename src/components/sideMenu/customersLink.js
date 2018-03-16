//@flow
import React from 'react';
import {Link} from 'react-router-dom';

const CustomersLink = () => (
    <Link
        to={'/Customers'}
    >
        {'Customers'}
    </Link>
);

export default CustomersLink;