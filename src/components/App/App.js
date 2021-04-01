import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';
import logo from './img/logo.svg';

const App = () => {
  return (<Router>
    <div className={styles.wrap}>
      <Card className={styles.sidebar}>
        <MenuList className={styles.menuList}>
          <a className={styles.linkLogo}
            href='https://webheroschool.ru/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img className={styles.pic} src={logo} width="100" height="40" alt="logo" />
          </a>
          <Link
            className={styles.link}
            activeClassName={styles.linkActive}
            exact
            to='/'>
            <MenuItem>Обо мне</MenuItem>
          </Link>
          <Link
            className={styles.link}
            activeClassName={styles.linkActive}
            to='/todo'>
            <MenuItem>Дела</MenuItem>
          </Link>
          <Link
            className={styles.link}
            activeClassName={styles.linkActive}
            to='/contacts'>
            <MenuItem>Контакты</MenuItem>
          </Link>
        </MenuList>
      </Card>
      <Card className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </Card>
    </div>
  </Router>);
}

export default App;
