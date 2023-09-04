import React from 'react';
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Div from "@jumbo/shared/Div";

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <Div sx={{
            py: 2,
            px: { lg: 6, xs: 4 },
            borderTop: 2,
            borderColor: 'divider',
            bgcolor: 'background.paper',
        }}>
            <Div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Div sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant={"body1"} color={"text.primary"}>Copyright ZapCom © {currentYear}</Typography>
                    {/* <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' }, mb: 0, mr: 2, color: 'primary.main' }}>$24 Only</Typography> */}
                    
                </Div>
            </Div>
        </Div>
    );
};

export default Footer;
