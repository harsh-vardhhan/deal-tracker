//@flow
import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import TableHeader from 'grommet/components/TableHeader';
import type {Deals} from './../../types/Deals';

type DealTableType = {
    deals: Deals,
    dealRow: number,
    selectDeal: (number) => void,
    reverseDealsAction: () => void
};

const DealTable = ({deals, dealRow, selectDeal, reverseDealsAction}: DealTableType) => (
    <Table
        style={{height: 250, overflowX: 'scroll'}}
        selectable={true}
        onSelect={selectDeal}
        selected={dealRow}
    >
        <DealTableHeader reverseDealsAction={reverseDealsAction}/>
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

const DealTableHeader = ({reverseDealsAction}) => (
    <TableHeader
        sortAscending={true}
        onSort={reverseDealsAction}
        sortIndex={0}
        labels={['Name', 'Amount', 'Stage']}
    />
);

export default DealTable;