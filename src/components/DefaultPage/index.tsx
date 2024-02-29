import styles from './DefaultPage.module.scss'; 
import { Outlet } from 'react-router-dom';
import stylesTheme from 'styles/theme.module.scss';

export default function DefaultPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa da massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
}