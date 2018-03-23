//@flow
import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import type {Deals} from './../../types/Deals';

type DealTableType = {
    deals: Deals,
    selectDeal: (number) => void
};

const DealTable = ({deals, selectDeal}: DealTableType) => (
    <Table
        selectable={true}
        onSelect={selectDeal}
    >
        <DealTableHeader/>
        <tbody>
            {deals.map((value, i) => {
                return (
                    <TableRow key={i}>
                        <td>{value.name}</td>
                        <td>{value.amount}</td>
                        <td>{value.stage}</td>
                    </TableRow>
                );
            })}
        </tbody>
    </Table>
);

const DealTableHeader = () => (
    <thead>
        <tr>
            <th>{'Name'}</th>
            <th>{'Amount($)'}</th>
            <th>{'Stage'}</th>
        </tr>
    </thead>
);

export default DealTable;