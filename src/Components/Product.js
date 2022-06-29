import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartState } from "../Context";
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 340,
  },
});

export default function Product({prod}) {
  const { cart, setCart, subtotal, setSubtotal, count, setCount } = CartState();

  const classes = useStyles();

  const totalProd = () =>{
    setCount(count+1) //This is count of total products in cart page
    prod.count = prod.count+1 //prod.count is count of individual products in cart page
    prod.count>1 ?
    setSubtotal(subtotal + prod.price):
    setCart([prod, ...cart])
    setSubtotal(subtotal + prod.price)
    
}

  const remove = () =>{
    setCount(count-1)
    prod.count = prod.count-1
    prod.count>0 ?
    setSubtotal(subtotal - prod.price):
    setCart(cart.filter((c) => c.id !== prod.id))
    setSubtotal(subtotal - prod.price)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={prod.image}
        />
        <CardContent>
        <div style={{display: 'flex', justifyContent: 'space-between',}}>
          <Typography gutterBottom variant="h5" component="h2">
          {prod.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ${prod.price}
          </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
          Logitech G435 LIGHTSPEED and Bluetooth Wireless Gaming Headset
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {prod.count>0 ?
      <>
        <IconButton onClick={totalProd}>
            <AddShoppingCartIcon />
        </IconButton>
        <IconButton onClick={remove}>
            <DeleteIcon />
        </IconButton>
        </>:
        <>
        <IconButton onClick={totalProd}>
            <AddShoppingCartIcon />
        </IconButton>
        </>
      }
      </CardActions>
    </Card>
  );
}
