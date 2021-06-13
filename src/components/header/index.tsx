import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>AutoUserBGs</h1>
      <h2>by 0J3</h2>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
        <Link activeClassName={style.active} href="/profile">
          My Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;
