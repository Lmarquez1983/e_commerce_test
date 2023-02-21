import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from './styles'


const products =[
    {id: '1', name:'shoes', description:'Running Shoes', price: '$5', image: 'https://cdn.shopify.com/s/files/1/1230/9376/products/ACS-1011B359_7ELake_20Drive_20-_20Hazard_20Green.jpg?v=1650354793'},
    {id: '2', name:'Macbook', description:'Apple Macbook', price: '$2000', image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-mbp16touch-silver-gallery-2019?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1582233083340'},
];


const Products = ()=> {
    const classes = useStyles();
    return(
        <main className={classes.content}>
        <div className={classes.toolbar}/>    
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product)=> (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products