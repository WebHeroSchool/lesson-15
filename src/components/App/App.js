import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

const App = () =>
  (<Router>
    <div ClassName={styles.wrap}>
      <nav className={styles.menu}>
        <Link to='/'>
          <button className={styles.link}>Обо мне</button>
        </Link>
        <Link to='/todo'>
          <button className={styles.link}>Дела</button>
        </Link>
        <Link to='/contacts'>
          <button className={styles.link}>Контакты</button>
        </Link>
      </nav>
      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>
  </Router>);

export default App;
