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
        AutoUserBGs is a Pure CSS Database, similar to{' '}
        <a href="https://github.com/Discord-Custom-Covers/usrbg/">usrbg</a> by
        Tropical#4355, of user-selected backgrounds. The difference being, there
        is no human other than you, when it comes to approving backgrounds.
      </p>
      <h2></h2>
    </div>
  );
};

export default Home;
