//@flow
import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import {DragSource} from 'react-dnd';
import type {Deal} from './../../../types/Deal';
import ItemTypes from './itemTypes';

type Props = {
    deal: Deal,
    connectDragSource: any
};

const dealSource = {
    beginDrag(props) {
        return {
            value: props.value,
            deal: props.deal
        };
    }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
});

class DealBoardItem extends Component<Props> {
    render() {
        const {deal, connectDragSource} = this.props;
        return connectDragSource(
            <div>
                <Box
                    pad={{vertical: 'small'}}
                >
                    <Box
                        colorIndex='accent-1-a'
                        style={{height: 50, width: 180}}
                    >
                        <Value
                            label={deal.name}
                            value={deal.amount}
                            size='xsmall'
                            align='center'
                            units='$'
                        >
                            {deal.amount}
                        </Value>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default DragSource(ItemTypes.DEAL, dealSource, collect)(DealBoardItem);