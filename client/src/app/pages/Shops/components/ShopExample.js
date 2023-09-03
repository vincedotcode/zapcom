import React, {useState} from 'react';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';
import shopsList from './data';
import ShopCell from './ShopCell';
import {Table, TableBody,Card,TableHead, TableRow,TableCell} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";

const Shops = SortableContainer(({shops}) => {

    return (
        <TableContainer>
            <Table sx={{minWidth: 650}}>
            <TableHead>
                    <TableRow>
                        
                        <TableCell sx={{pl: 3}}>Logo</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell sx={{pr: 3}} >Owner Name</TableCell>
                        <TableCell sx={{pr: 3}} >Products</TableCell>
                        <TableCell sx={{pr: 3}} >Orders</TableCell>
                        <TableCell sx={{pr: 3}} >Status</TableCell>
                        <TableCell sx={{pr: 3}} >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {shops.map((shop, index) => (
                        <ShopCell key={index} index={index} shop={shop}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

const DndExample = () => {
    const [shops, setShops] = useState(shopsList);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setShops(arrayMove(shops, oldIndex, newIndex));
    };

    return (
        <Card
            
            wrapperSx={{
                p: 0,
                backgroundColor: 'background.paper',

                '&:last-child': {
                    pb: 0
                }
            }}
        >
            <Shops shops={shops} onSortEnd={onSortEnd} useDragHandle={true}/>
        </Card>
    );
};

export default DndExample;
