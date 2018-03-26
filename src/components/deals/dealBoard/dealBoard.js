//@flow
import React from 'react';
import DealBoardHeader from './dealBoardHeader';
import DealBoardSpace from './dealBoardSpace';
import type {Deals} from './../../../types/Deals';

type DealBoardType = {
    deals: Deals
};

const DealBoard = ({deals}: DealBoardType) => {
    return (
        <div>
            <DealBoardHeader/>
            <DealBoardSpace deals={deals}/>
        </div>
    );
};

export default DealBoard;