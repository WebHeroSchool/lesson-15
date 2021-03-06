import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul className={styles.itemList}>
  {items.map(item =>
    <li key={item.id} className={styles.item}>
    <Checkbox
      checked={item.isDone}
      color="primary"
      value="checkedG"
      inputProps={{
        'aria-label': 'secondary checkbox',
      }}
      onClick={() => onClickDone(item.id)}
     />
     <div className={styles.itemText} onClick={() => onClickDone(item.id)}>
       <Item
         value={item.value}
         isDone={item.isDone}
         id={items.id}
         onClickDone={onClickDone}
        />
     </div>
     <div>
       <IconButton
         aria-label='delete'
         onClick={() => onClickDelete(item.id)}
        >
         <DeleteIcon fontSize='small' />
       </IconButton>
     </div>
    </li>)}
  </ul>
);

ItemList.defaultProps = {
  items: [{
    value: "Не существующая задача",
    isDone: false,
  }]
};

export default ItemList;
