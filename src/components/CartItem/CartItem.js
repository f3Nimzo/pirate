import React, {useState} from "react";
import {useStateValue} from "../../state/state";
import {Grid} from "@material-ui/core";
import Product from "../Product/Product";
import {makeStyles, OutlinedInput, Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }
}));

export default function CartItem(props) {
    const [count, setCount] = useState(props.purchased);
    const [, dispatch] = useStateValue();
    const classes = useStyles();

    return (
        <Grid container xs={6} direction="row" justify="center" alignItems="center">
            <Grid item xs={5} className={classes.card}>
                <div className={classes.card}>
                    <Product name={props.title} image={props.image} price={props.price} canRemove/>
                </div>
            </Grid>
            <Grid item xs={5} className={classes.card}>
                <div className={classes.card}>
                    <OutlinedInput
                        labelWidth={10}
                        placeholder={props.purchased.toString()}
                        onChange={(event) => setCount(event.target.value)}/>
                    <Button size="small"
                            color="primary"
                            variant="outlined"
                            onClick={() => dispatch({
                                type: "updateItemCount",
                                title: props.title,
                                updatedNum: count
                            })}>
                        Update Quantity
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}