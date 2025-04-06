import React from 'react';
import CategorySidebar from './CategorySidebar';
import SidebarProductShopFullWidth from './SidebarProductShopFullWidth';
import CategoryFilterByColor from './CategoryFilterByColor';

const ShopSidebar = () => {
    return (
        <>
            <CategorySidebar />
            <SidebarProductShopFullWidth />
            <CategoryFilterByColor />
        </>
    );
};

export default ShopSidebar;