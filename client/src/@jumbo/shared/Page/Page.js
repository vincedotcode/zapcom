import React from 'react';
import useJumboApp from "@jumbo/hooks/useJumboApp";
import {config} from "../../../app/config/main";

const Page = ({component, layout, ...restProps}) => {
    const {activeLayout, setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        if (layout !== activeLayout) {
            setActiveLayout(layout);
        }
    }, [activeLayout, layout, setActiveLayout]);

    const PageComponent = component;

    return (
        <PageComponent {...restProps} />
    );
};

Page.defaultProps = {
    layout: config.defaultLayout
};

export default Page;