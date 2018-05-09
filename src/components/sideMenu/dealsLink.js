//@flow
import React from 'react';
import {Link} from 'react-router-dom';

const DealsLink = () => (
    <Link
        to={'/Deals/Table'}
    >
        {'Deals'}
    </Link>
);

export default DealsLink;