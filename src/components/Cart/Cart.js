import React from "react";
import { useStateValue } from "../../state/state";
import {Grid} from "@material-ui/core";
import CartItem from "../CartItem/CartItem";
import CartTopBar from "../CartTopBar/CartTopBar";

export default function Cart(props) {
    const [{purchasedItems}] = useStateValue();

    return (
        <div>
            <CartTopBar />
            <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                {purchasedItems.map(item =>
                    item.purchased !== 0 ?
                    <CartItem title={item.title}
                              image={item.image}
                              price={item.price}
                              purchased={item.purchased}
                              key={item.title}
                              canRemove
                    /> : null
                )}
            </Grid>
        </div>
    )
}