import { useState } from 'react';
import Search from './Search';
import styles from './Menu.module.scss';
import Filter from './Filter';
import Organizer from './Organizer';
import Items from './Items';
import stylesTheme from 'styles/theme.module.scss';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [organizer, setOrganizer] = useState('');
  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch}/>
      <div className={styles.menu__filters}>
        <Filter filter={filter} setFilter={setFilter} />
        <Organizer organizer={organizer} setOrganizer={setOrganizer} />
      </div>
      <Items search={search} filter={filter} organizer={organizer} />
    </section>
  );
}