import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const toDoItem = 'Написать новое приложение';

const App = () => (
 <div>
  <h1>Важные дела:</h1>
  <InputItem />
  <ItemList toDoItem={toDoItem} />
  <Footer count={3} />
 </div>);

export default App;
