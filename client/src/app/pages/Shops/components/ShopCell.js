import React, {useState} from 'react';
import {SortableElement} from 'react-sortable-hoc';
import {IconButton, TableCell, TableRow} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Star} from "@mui/icons-material";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";


const ShopCell = props => {

    const {shop} = props;
    // const [starred, setStarred] = useState(shop.starred);


    const {name, logo, ownerName, products, orders, status} = shop;

    return (

        <TableRow>
           
            <TableCell width={"6%"}>
                {logo === null || logo === '' ? (
                    <Avatar sx={{height: 44, width: 44}}>{name.charAt(0).toUpperCase()}</Avatar>
                ) : (
                    <Avatar sx={{height: 44, width: 44}} alt={name} src={logo}/>
                )}
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{name}</Typography>
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
               
                <Typography variant={"h6"} mb={0}>{status}</Typography>
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
