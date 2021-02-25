import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ toDoItem }) => (<ul>
 <li><Item toDoItem={toDoItem} /></li>
 <li><Item toDoItem={'прописать props-ы'} /></li>
 <li><Item toDoItem={'сделать все дела'} /></li>
</ul>);

export default ItemList;
