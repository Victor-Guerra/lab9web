import { Box, Grid, Paper, Button, Modal, Typography } from "@material-ui/core";
import Cart from "../../types/Cart";
import Sku from "../../types/Sku";
import "./CartInfo.css";
import React from 'react';

interface CartInfoProps {
    open: boolean;
    handleClose(event: any): void;
    handleRemove(event: any, sku: Sku): void;
    cart: Cart;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CartInfo: React.FC<CartInfoProps>  = (props) => {
    var lineItems = [] as any[];
    if (props.cart !== undefined && props.cart.lineItems !== undefined) {
        props.cart.lineItems.forEach( (item) => {
            lineItems.push(
                <React.Fragment>
                    <Grid item lg={2}>
                        <Paper className="smallImage">
                          <img src={item.sku.smallImageUrl} alt={item.product.name} />
                        </Paper>
                    </Grid>
                    <Grid item lg={10} container>
                        <Grid item lg={8}>
                            <Typography className="productNameCart" >
                            {item.product.name}
                            </Typography>
                        </Grid>
                        <Grid item lg={2}>
                            {item.quantity} x <Typography className="dollars" >{item.unitPrice}</Typography>
                        </Grid>
                        <Grid item lg={2}>
                            <Button 
                                className="cartButton" 
                                variant="contained" 
                                onClick={(event) => props.handleRemove(event, item.sku)}>
                                Remove
                            </Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            );
        });
    }
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-description">
                    Shopping Cart:
                </Typography>
                    <div className="productPreviewCart">
                        <Grid container className="productGridCart" spacing={2}>
                            {lineItems}
                        </Grid>
                    </div>
                <Button className="cartButton" variant="contained" onClick={props.handleClose}>
                Close
                </Button>
            </Box>
        </Modal>
    );
};

export default CartInfo;