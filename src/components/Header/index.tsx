import { ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
export default function Header(){
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/menu'
  }, {
    label: 'Sobre',
    to: '/info'
  }];
  return (
    <nav className={styles.heading}>
      <Logo />
      <ul className={styles.heading__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.heading__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}