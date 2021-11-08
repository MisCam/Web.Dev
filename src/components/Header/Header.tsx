import React from 'react';
import styles from './Header.module.css';

const Header = (): React.ReactElement => {
  return (
    <header>
      <div className={styles.logo}>Web.Dev</div>
      <div className={styles.nav_menu}>
        <button>Home</button>
        <button>About</button>
        <button>Testimonials</button>
        <button>Contact</button>
        <button>Sign in</button>
        <button className={styles.sign_up}>Sign up</button>
      </div>
    </header>
  );
}

export default Header;
