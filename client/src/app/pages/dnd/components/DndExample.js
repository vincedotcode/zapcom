import React, {useState} from 'react';
import {arrayMove, SortableContainer} from 'react-sortable-hoc';
import contactsList from './data';
import ContactCell from "./ContactCell";
import {Table, TableBody,Card,TableHead, TableRow,TableCell} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";

const Contacts = SortableContainer(({contacts}) => {

    return (
        <TableContainer>
            <Table sx={{minWidth: 650}}>
            <TableHead>
                    <TableRow>
                        
                        <TableCell sx={{pl: 3}}>Avatar</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell sx={{pr: 3}} >Email</TableCell>
                        <TableCell sx={{pr: 3}} >Permissions</TableCell>
                        <TableCell sx={{pr: 3}} >Available wallet points</TableCell>
                        <TableCell sx={{pr: 3}} >Status</TableCell>
                        <TableCell sx={{pr: 3}} >Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact, index) => (
                        <ContactCell key={index} index={index} contact={contact}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});

const DndExample = () => {
    const [contacts, setContacts] = useState(contactsList);

    const onSortEnd = ({oldIndex, newIndex}) => {
        setContacts(arrayMove(contacts, oldIndex, newIndex));
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
            <Contacts contacts={contacts} onSortEnd={onSortEnd} useDragHandle={true}/>
        </Card>
    );
};

export default DndExample;
