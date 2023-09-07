import React, {useState} from 'react';
import {SortableElement} from 'react-sortable-hoc';
import { TableCell, TableRow,Chip,Link} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ProductCell = props => {

    const {product} = props;
    // const [starred, setStarred] = useState(product.starred);


    const {name, group, image, productType, shop,unitPrice, status,qty,id} = product;

    return (

        <TableRow>
           
            <TableCell width={"6%"}>
                {image === null || image === '' ? (
                    <Avatar variant="square" sx={{height: 44, width: 44}}>{name.charAt(0).toUpperCase()}</Avatar>
                ) : (
                    <Avatar variant="square" sx={{height: 44, width: 44}} alt={name} src={image}/>
                )}
            </TableCell>
            <TableCell width={"15%"}>
            <Typography variant={"h6"} mb={0}>{name}</Typography>
           
               
            </TableCell>
            <TableCell width={"20%"}>
                <Typography variant={"h6"} mb={0}>{group}</Typography>
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{shop}</Typography>
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{productType}</Typography>
            </TableCell>
           
            <TableCell width={"4%"}>
               
                <Typography variant={"h6"} mb={0}>{unitPrice}</Typography>
            </TableCell>
            <TableCell width={"4%"}>
               
               <Typography variant={"h6"} mb={0}>{qty}</Typography>
           </TableCell>
            <TableCell width={"4%"}>
            {status==='Published'?( <Chip label={status} size={'small'} color={'success'} sx={{mb: 1}} />):( <Chip label={status} size={'small'} color={'error'} sx={{mb: 1}} />)}

            </TableCell>
        </TableRow>
    );
};

export default SortableElement(ProductCell);

