import React from 'react';
import Typography from "@mui/material/Typography";
import ShopExample from './components/ShopExample';
import {useTranslation} from "react-i18next";

const MyShops = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.myShops')}</Typography>
            <ShopExample/>
        </React.Fragment>
    );
};

export default MyShops;
