import {Box,Typography,makeStyles} from '@material-ui/core';
import { useState,useEffect } from 'react';

const useStyle=makeStyles({
    component:{
        width:'30%',
        marginLeft:15,
        background:'#fff',
    },
    header:{
        padding:'16px 24px',
        borderBottom:'1px solid #f0f0f0',
    },
    container:{
        padding:'15px 24px',
        '& > *':{
            marginTop:20,
            fontSize:14,
        }
    },
    greyTextColor:{
        color:'#878787',
    },
    price:{
        float:'right',
    },
    totalAmount:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px dashed #e0e0e0',
        padding:'0 20px',
        borderBottom:'1px dashed #e0e0e0',
    },
})

const TotalView=({cartItems})=>{
    const classes=useStyle();
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);
    useEffect(()=>{
        totalAmount();
    },[cartItems])
    const totalAmount=()=>{
        let price=0, discount=0;
        cartItems.map(item=>{
            price+=item.price.mrp;
            discount=(item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
return(
    <Box className={classes.component}>
        <Box className={classes.header}>
            <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
        </Box>
        <Box className={classes.container}>
        <Typography>Price ({cartItems.length} item) <span className={classes.price}>₹{price}</span></Typography>
        <Typography>Discount <span className={classes.price}>₹{discount}</span></Typography>
        <Typography>Delivery Charge<span className={classes.price}>₹40</span></Typography>
        <Typography className={classes.totalAmount}>Total amount<span className={classes.price}>{price - discount+ 40} </span></Typography>
        <Typography style={{color:'green'}}>You will save ₹{discount-40} on this order</Typography>
        </Box>
    </Box>
)
}

export default TotalView;