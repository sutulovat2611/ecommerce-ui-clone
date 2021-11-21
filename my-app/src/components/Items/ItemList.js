import classes from './ItemList.module.css';
import Item from './Item';

import {Grid} from '@mui/material';

function ItemList(props){
    return (
    <ul className={classes.list}>
        <Grid container spacing={4}>
    {props.items.map(item => 
            <Grid item xs={3}>
            <Item 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                title={item.title}
                address={item.address}
                description={item.description}
            />
            </Grid>)}
        </Grid>
    </ul>
    )
}

      

export default ItemList;