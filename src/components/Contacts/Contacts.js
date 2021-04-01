import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import SocialList from '../SocialList/SocialList';

import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.wrap}>
    <a className={styles.link} href="mailto:primma1984@mail.ru">
      <MailIcon className={styles.icon} />
        primma1984@mail.ru
    </a>
    <a className={styles.link} href="tel:+7(908)034-80-19">
      <PhoneRoundedIcon className={styles.icon} />
      +7 (908) 034 80 19
    </a>
    <SocialList />
  </div>);

export default Contacts;
