import classes from './ItemList.module.css';
import Item from './Item';
import {Grid} from '@mui/material';


function ItemList(props){
    return (
    <ul className={classes.list}>
        <Grid container >
    {props.items.map(item => 
            <Grid item xs={3}>
            <Item 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                sale={item.sale}
                old_price={item.old_price}
                new_price={item.new_price}
                colors={item.colors}
                sizes={item.sizes}
                title={item.title}
                rating={item.rating}
                sku={item.sku}
                brand_name={item.brand_name}
            />
            </Grid>)}
        </Grid>
    </ul>
    )
}  

export default ItemList;