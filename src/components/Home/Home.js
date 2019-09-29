import React from 'react';
import TopBar from "../TopBar/TopBar";
import ProductList from "../ProductList/ProductList";

export default function Home(props) {
    return (
        <div>
            <TopBar />
            <ProductList />
        </div>
    )
}