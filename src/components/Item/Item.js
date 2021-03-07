import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ value, isDone, onClickDone, id }) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
{value}
</span>);

Item.defaultProps = {
  isDone: false
};

Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	onClickDone: PropTypes.func,
  id: PropTypes.number.isRequired,
	onClickDelete: PropTypes.func
};

export default Item;
