import React, {useState} from 'react';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';
import productsList from './data';
import ProductCell from './ProductCell';
import {Table, TableBody,Card,TableHead, TableRow,TableCell} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";

const Shops = SortableContainer(({products}) => {

    return (
        <TableContainer>
            <Table sx={{minWidth: 650}}>
            <TableHead>
                    <TableRow>
                        
                        <TableCell sx={{pl: 3}}>Image</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell sx={{pr: 3}} >Group</TableCell>
                        <TableCell sx={{pr: 3}} >Shop</TableCell>
                        <TableCell sx={{pr: 3}} >Product Type</TableCell>
                        <TableCell sx={{pr: 3}} >Price/Unit</TableCell>
                        <TableCell sx={{pr: 3}} >Quantity</TableCell>
                        <TableCell sx={{pr: 3}} >Status</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <ProductCell key={index} index={index} product={product}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

const DndExample = () => {
    const [products, setProducts] = useState(productsList);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setProducts(arrayMove(products, oldIndex, newIndex));
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
            <Shops products={products} onSortEnd={onSortEnd} useDragHandle={true}/>
        </Card>
    );
};

export default DndExample;
