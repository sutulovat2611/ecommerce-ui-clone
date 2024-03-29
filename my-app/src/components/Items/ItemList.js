/* Importing other components */
import Item from "./Item";

/*Importing from the external libraries*/
import { Grid } from "@mui/material";

/* Importing the scss file for styling */
import classes from "./ItemList.module.scss";

function ItemList(props) {
  return (
    <ul className={classes.list}>
      <Grid container>
        {props.items.map((item) => (
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
          </Grid>
        ))}
      </Grid>
    </ul>
  );
}

export default ItemList;
