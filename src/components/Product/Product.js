import React from "react";
import {makeStyles} from "@material-ui/core";
import {useStateValue} from "../../state/state";
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
    Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    cardBottom: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
}));

export default function Product(props) {
    const classes = useStyles();
    const [{purchasedItems}, dispatch] = useStateValue();

    return (
        <Card >
            <CardMedia
                component="img"
                height="200"
                image={props.image}
            />
            <CardContent>
                {props.name}
            </CardContent>
            <CardActions className={classes.cardBottom}>
                <div className={classes.cardBottom}>
                    <Typography variant="h5">
                        ${props.price.toFixed(2)}
                    </Typography>
                    {props.canRemove
                        ? (<Button
                            size="small"
                            color="secondary"
                            variant="outlined"
                            onClick={() => {console.log("Here"); dispatch({
                                type: "updateItemCount",
                                title: props.name,
                                updatedNum: 0
                            })}}>
                            Remove from Cart
                            </Button>)
                        : (<Button
                            size="small"
                            color="primary"
                            variant="outlined"
                            onClick={() => dispatch({
                                type: "updateItemCount",
                                title: props.name,
                                updatedNum: purchasedItems.find(item => item.title === props.name).purchased + 1
                            })}
                        >
                            Add to Cart
                        </Button>)

                    }
                </div>

            </CardActions>
        </Card>
    )
}