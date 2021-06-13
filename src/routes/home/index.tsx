import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
  if (typeof document !== 'undefined') document.title = 'AutoUserBGs';
  return (
    <div class={style.home}>
      <h1>
        AutoUserBGs
        <span
          style={{
            fontWeight: 100,
            fontSize: '0.5em',
          }}
        >
          &nbsp;Have your own "user background" on BD/Powercord without the need
          to wait.
        </span>
      </h1>
      <h2>Introduction</h2>
      <p>
        AutoUserBGs (also refrenced as: aubg,aubgs,autousrbgs) is a Pure CSS
        Database, similar to{' '}
        <a href="https://github.com/Discord-Custom-Covers/usrbg/">usrbg</a> by
        Tropical#4355, of user-selected backgrounds. The difference being, there
        is no human other than you, when it comes to approving backgrounds.
      </p>
      <h2>Why AutoUsrBGs?</h2>
      <p>
        AUBG does not require you to wait to get a user background
        added/updated.
      </p>
      <h2>Do I need to import UsrBGs aswell?</h2>
      <p>
        No. AutoUsrBGs'{' '}
        <a href="https://0j3-2.github.io/AutoUserBGs/publicvars.css">
          Variables importer file
        </a>{' '}
        already imports it for you.
      </p>
      <h2>How do I get started?</h2>
      <p>
        Just click the link <a href="/profile">here</a>.
      </p>
    </div>
  );
};

export default Home;
