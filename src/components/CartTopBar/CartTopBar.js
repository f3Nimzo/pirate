import React from "react";
import {useStateValue} from "../../state/state";
import {AppBar, Typography, makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem",
        marginBottom: "3rem"
    },
    backLink: {
        textDecoration: "none",
        color: "white",
        position: "absolute",
        right: "90%"
    },
    discounts: {
        textDecoration: "none",
        color: "white",
        position: "absolute",
        left: "70%"
    }
}));

export default function TopBar() {
    const classes = useStyles();
    const [{purchasedItems}] = useStateValue();

    // Find total cost of items, apply and record discounts if possible
    let dvdCount = 0, dvdTotal = 0;
    let blurayCount = 0, blurayTotal = 0;
    let totalCount = 0;
    let appliedDiscounts = [];
    for (let item of purchasedItems) {
        if (item.purchased > 0) {
            if (item.type === 'dvd') {
                dvdCount++;
                dvdTotal += (parseInt(item.purchased) * parseInt(item.price));
            } else {
                blurayCount++;
                blurayTotal += (parseInt(item.purchased) * parseInt(item.price));
            }
            totalCount += parseInt(item.purchased);
        }
    }
    // Check for discounts and apply them
    if (dvdCount === 3) {
        dvdTotal *= 0.9;
        appliedDiscounts.push("DVD");
    }
    if (blurayCount === 3) {
        blurayTotal *= 0.85;
        appliedDiscounts.push("Blu-Ray");
    }

    let total = dvdTotal + blurayTotal;
    if (totalCount >= 100) {
        total *= 0.95;
        appliedDiscounts.push("Bulk");
    }

    return (
        <AppBar position="static" color="secondary" className={classes.root}>
            <NavLink to="/" className={classes.backLink}>
                Back
            </NavLink>
            <Typography variant="h6" noWrap>
                Total: ${parseFloat(Math.round(total * 100) / 100).toFixed(2)}
            </Typography>
            <Typography variant="h6" noWrap className={classes.discounts}>
                Discounts Applied: {appliedDiscounts.join(", ")}
            </Typography>
        </AppBar>
    )
}