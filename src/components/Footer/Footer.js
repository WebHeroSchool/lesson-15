import React from 'react';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { style } from '@material-ui/system';

const Footer = ({ count, onClickFooter }) =>
  (<footer className={styles.wrap}>
  <div className={styles.leftToDo} onClick={onClickFooter}>Осталось выполнить дел: {count}</div>
  <div>
    <ButtonGroup variant="text" size="small" aria-label="small contained button group">
      <Button>Все</Button>
      <Button>Активные</Button>
      <Button>Выполненые</Button>
    </ButtonGroup>
  </div>
  <div>
    <Button
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}>
      Удалить выполненные дела
    </Button>
</div>
</footer>);

export default Footer;
