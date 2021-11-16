import classes from './ItemList.module.css';
import Item from './Item';

function ItemList(props){
    return <ul className={classes.List}>
        {props.items.map(item => <Item 
        key={item.id} 
        id={item.id} 
        image={item.image} 
        title={item.title}
        address={item.address}
        description={item.description}
        />)}
    </ul>

}

export default ItemList;