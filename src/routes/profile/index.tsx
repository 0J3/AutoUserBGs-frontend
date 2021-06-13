import { Component, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

interface Props {
  user: string;
}

class ProfileContent extends Component<{
  authCode: string;
  authTokenType: string;
}> {
  async render() {
    const user = await fetch(
      '/api/whoamireally?auth=' +
        this.props.authTokenType +
        ' ' +
        this.props.authCode,
      {}
    );
    return <div></div>;
  }
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
  // const { user } = props;
  // const [time, setTime] = useState<number>(Date.now());
  // const [count, setCount] = useState<number>(0);

  // gets called when this route is navigated to
  // useEffect(() => {
  //   const timer = window.setInterval(() => setTime(Date.now()), 1000);

  //   // gets called just before navigating away from the route
  //   return (): void => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // update the current time
  // const increment = (): void => {
  //   setCount(count + 1);
  // };

  const acode = localStorage.getItem('AUTH_CODE');
  const att = localStorage.getItem('AUTH_TOKEN_TYPE');

  if (acode)
    return (
      <div class={style.profile}>
        <ProfileContent authCode={acode} authTokenType={att || 'Bearer'} />
      </div>
    );
  else {
    if (typeof window !== 'undefined') document.location.replace('/api/login');
    return <div></div>;
  }
};

export default Profile;
