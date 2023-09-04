import React from 'react';
import Typography from "@mui/material/Typography";
import DndExample from "./components/DndExample";
import {useTranslation} from "react-i18next";

const DragAndDrop = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.users')}</Typography>
            <DndExample/>
        </React.Fragment>
    );
};

export default DragAndDrop;
