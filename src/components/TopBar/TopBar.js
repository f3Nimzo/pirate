import React from 'react';
import {useStateValue} from "../../state/state";
import {AppBar, Typography, Icon} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "4rem",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        marginBottom: "3rem",
    },
    cartLink: {
        textDecoration: "none",
        color: "white",
        position: "absolute",
        left: "80%"
    },
    linkText: {
        paddingRight: "1rem"
    }
}));

export default function TopBar() {
    const classes = useStyles();
    const [{purchasedItems}] = useStateValue();

    return (
        <AppBar position="static" color="secondary" className={classes.root}>
                <Typography variant="h6" noWrap>
                    Liz's Pirate Shop
                </Typography>
                <NavLink to="cart" className={classes.cartLink}>
                    <Typography variant="h6" noWrap className={classes.linkText}>
                        Go to Cart ({purchasedItems.reduce((acc, item) => acc += parseInt(item.purchased), 0)})
                    </Typography>
                    <Icon>shopping_cart</Icon>
                </NavLink>
        </AppBar>
    )
}