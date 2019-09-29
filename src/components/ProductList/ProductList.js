import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import Product from "../Product/Product";
import inventory from "../../assets/inventory"

const useStyles = makeStyles(theme => ({
    gridContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        display: "flex",
        width: "55%",
        justifyContent: "center",
        alignItems: "center"
    }
}));

export default function ProductList() {
    const classes = useStyles();

    return (
        <div className={classes.gridContainer}>
            <Grid container spacing={5} direction="row" justify="space-between">
                {inventory.map(item =>
                    <Grid item xs={4} className={classes.card} key={item.title}>
                        <div className={classes.card}>
                            <Product name={item.title} image={item.image} price={item.price}/>
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}