import React from 'react';
import Typography from "@mui/material/Typography";
import ProductExample from './components/ProductExample';
import {useTranslation} from "react-i18next";

const Products = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('sidebar.menuItem.products')}</Typography>
            <ProductExample/>
        </React.Fragment>
    );
};

export default Products;
