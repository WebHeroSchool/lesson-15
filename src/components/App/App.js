import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const toDoItem = 'Написать новое приложение';

const App = () => {
  const items = [
    {
      value: 'Написать новое приложение'
    },
    {
      value: 'прописать props-ы'
    },
    {
      value: 'сделать все дела'
    }
  ];

  return (
    <div className="wrap">
      <h1 className="wrap__title">Важные дела:</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
}

export default App;
