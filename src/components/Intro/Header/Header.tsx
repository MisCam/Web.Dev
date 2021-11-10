import React from 'react';

import Button from '../../Button';
import { BUTTON_SIZE, BUTTON_COLOR } from '../../Button/Button';

import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  return (
    <header>
      <div className={styles.logo}>Web.Dev</div>
      <div className={styles.nav_menu}>
        <div className={styles.nav_links}>
          <a>Home</a>
          <a>About</a>
          <a>Testimonials</a>
          <a>Contact</a>
        </div>
        <Button size={BUTTON_SIZE.verySmall} color={BUTTON_COLOR.transparent}>Sign in</Button>
        <Button size={BUTTON_SIZE.small} color={BUTTON_COLOR.green}>Sign up</Button>
      </div>
    </header>
  );
}

export default Header;
