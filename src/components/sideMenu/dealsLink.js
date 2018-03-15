import React from 'react';
import Anchor from 'grommet/components/Anchor';
import {Link} from 'react-router-dom';
import Deals from '../deals';

const DealsLink = () => (
    <Link
        to={'/Deals'}
        component={Deals}
    >
        <Anchor
            href='#'
            className='active'
        >
            {'Deals'}
        </Anchor>
    </Link>
);

export default DealsLink;