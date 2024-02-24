import { useState } from 'react';
import Search from './Search';
import styles from './Menu.module.scss';
import { ReactComponent as Logo} from 'assets/logo.svg';
import Filter from './Filter';

export default function Menu() {
    const [busca, setBusca] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    return (
        <main>
            <nav className={styles.logo}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cardápio</h3>
                <Search busca={busca} setBusca={setBusca}/>
                <div className={styles.menu__filters}>
                    <Filter filter={filter} setFilter={setFilter} />
                </div>
            </section>
        </main>
    )
}