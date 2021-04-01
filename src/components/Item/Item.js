import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Cancel';


import styles from './Item.module.css';

class Item extends React.Component {
  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return (
      <ListItem className={styles.itemList}>
        <Checkbox
          checked={isDone}
          tabIndex={-1}
          onClick={() => onClickDone(id)}
        />
        <ListItemText primary={value} classes={{
          root: isDone && styles.done
        }} />
        <ListItemSecondaryAction>
          <IconButton aria-label="delete">
            <DeleteIcon onClick={() => onClickDelete(id)}/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default Item;
