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
          :&nbsp;Have your own "user background" on BD/Powercord without the
          need to wait.
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
      <h2>How do I install AUBGs?</h2>
      <p>
        On Bandagedbd,...
        <ol>
          <li>
            Download the .theme.css file by going
            <a
              href="#/api/bd"
              onClick={() => (document.location.href = '/api/bd')}
            >
              here
            </a>{' '}
            and pressing ctrl+s
          </li>
          <li>Open your User Settings on Discord</li>
          <li>Click Themes</li>
          <li>Click Open Themes Folder</li>
          <li>Move the file you downloaded in the opened folder</li>
        </ol>
        On PowerCord,...
        <ol>
          <li>
            Download the .zip file by going
            <a
              href="#/api/bd"
              onClick={() => (document.location.href = '/api/bd')}
            >
              here
            </a>{' '}
            and pressing ctrl+s
          </li>
          <li>Open your User Settings on Discord</li>
          <li>Click Themes</li>
          <li>Click Open Themes Folder</li>
          <li>Move the file you downloaded in the opened folder</li>
        </ol>
      </p>
      <h2>How do I setup my own background?</h2>
      <p>
        Just click the link <a href="/profile">here</a> and follow the
        instructions there.
      </p>
      <h2>Why do you ask for email permissions?</h2>
      <p>
        I need to tell discord i need it, so discord tells me if it's verified
        or not. I will be using that in the future to prevent non-verified
        accounts. I do not keep your email address anywhere on my server.
        <br />
        If you want to confirm that claim yourself, this whole site's source
        code, inclusive the part that would save said email, can be found
        <a href="https://nora.lgbt/goto/gh/0J3/AutoUserBGs-frontend">
          here
        </a>{' '}
        and <a href="https://nora.lgbt/goto/gh/0J3/AutoUserBGsBackend">here.</a>
      </p>
      <h2>(Developers) How do I get a JSON list of user-settings</h2>
      <p>
        Fetch{' '}
        <a href="https://aubg.nora.lgbt/api/vars.json">
          https://aubg.nora.lgbt/api/vars.json
        </a>
        , parse it as JSON, and loop over every entry. Each key is a userid, and
        the value is an array of data. The key within that value, that you
        likely are interested in, is <code>banner</code>. It is the same string
        inputted <a href="/profile">here</a>.
        <br />
        Note: You cannot request this from the browser using{' '}
        <code>fetch()</code>, as there is an issue with CORS. You can, instead,
        have a proxy server to proxy to that file.
        <br />
        Node-fetch/Axios/etc... can still get the file just fine.
      </p>
    </div>
  );
};

export default Home;
