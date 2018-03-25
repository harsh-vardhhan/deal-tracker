//@flow
import React from 'react';
import {Link} from 'react-router-dom';

const DealsLink = () => (
    <Link
        to={'/Deals/DealTableRoute'}
    >
        {'Deals'}
    </Link>
);

export default DealsLink;