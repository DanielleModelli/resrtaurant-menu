import { useState } from 'react';
import Search from './Search';
import styles from './Menu.module.scss';
import Filter from './Filter';
import Organizer from './Organizer';
import Items from './Items';
import Header from 'components/Header';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [organizer, setOrganizer] = useState('');
  return (
    <main>
      <Header />
      <header className={styles.header}>
        <div className={styles.header__text}>
                    A casa do código e da massa
        </div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search search={search} setSearch={setSearch}/>
        <div className={styles.menu__filters}>
          <Filter filter={filter} setFilter={setFilter} />
          <Organizer organizer={organizer} setOrganizer={setOrganizer} />
        </div>
        <Items search={search} filter={filter} organizer={organizer} />
      </section>
    </main>
  );
}