import React, {useState} from 'react';
import {SortableElement} from 'react-sortable-hoc';
import { TableCell, TableRow,Chip,Link} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Link as RouterLink} from "react-router-dom";

import JumboDdMenu from "@jumbo/components/JumboDdMenu";


const ShopCell = props => {

    const {shop} = props;
    // const [starred, setStarred] = useState(shop.starred);


    const {name, logo, ownerName, products, orders, status,id} = shop;

    return (

        <TableRow>
           
            <TableCell width={"6%"}>
                {logo === null || logo === '' ? (
                    <Avatar variant="square" sx={{height: 44, width: 44}}>{name.charAt(0).toUpperCase()}</Avatar>
                ) : (
                    <Avatar variant="square" sx={{height: 44, width: 44}} alt={name} src={logo}/>
                )}
            </TableCell>
            <TableCell width={"15%"}>
            <Link underline={"none"} component={RouterLink} to={`${id}`}>

                <Typography variant={"h6"} mb={0}>{name}</Typography>
                </Link>
            </TableCell>
            <TableCell width={"20%"}>
                <Typography variant={"h6"} mb={0}>{ownerName}</Typography>
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{products}</Typography>
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{orders}</Typography>
            </TableCell>
            <TableCell width={"4%"}>
                {status==='Open'?( <Chip label={status} size={'small'} color={'warning'} sx={{mb: 1}} />):( <Chip label={status} size={'small'} color={'success'} sx={{mb: 1}} />)}
           
                
            </TableCell>
            <TableCell width={"4%"}>
                <JumboDdMenu menuItems={menuItems}/>
            </TableCell>
        </TableRow>
    );
};

export default SortableElement(ShopCell);

const menuItems = [
    {
        title: "View",
        slug: "view",
    },
    {
        title: "Disapprove Shop",
        slug: "disShop",
    }
]
