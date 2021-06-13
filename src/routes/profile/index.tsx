import { Component, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

interface Props {
  // user: string;
  success?: boolean;
}

const testEnv = [false][0];

class ProfileContent extends Component<
  {
    authCode: string;
    authTokenType: string;
    success?: boolean;
  },
  {
    user: {
      username: string;
      id: number | string;
      discriminator: number | string;
      avatar: string;
    };
    banner: string;
  }
> {
  constructor() {
    super();

    this.state = {
      user: {
        id: 0,
        avatar: '',
        discriminator: 1000,
        username: 'Waiting for server',
      },
      banner: '',
    };
  }
  render() {
    return (
      <div class={style.profile}>
        <img
          src={
            this.state.user.id == 0
              ? ''
              : `https://cdn.discordapp.com/avatars/${this.state.user.id}/${this.state.user.avatar}`
          }
          alt=""
        />
        <h1>
          &nbsp;{this.state.user.username}#{this.state.user.discriminator}
        </h1>
        <form
          action={
            (testEnv == true ? 'http://localhost:5500/' : `/api/`) +
            `setUserBanner/${this.props.authTokenType} ${this.props.authCode}`
          }
          method="post"
        >
          Banner Image: https://cdn.discordapp.com/
          <input
            type="text"
            name="url"
            id="url"
            class={style.url}
            placeholder="attachments/819934389516763146/853539221747138609/unknown.png"
            value={this.state.banner}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.props.success ? (
          <p
            style={{
              color: '#00ff00',
            }}
          >
            Successfully set the URL.
            <br />
            Please wait up to a minute for the styles to update.
            <br />
            Note: You must reload your discord for it to update
          </p>
        ) : (
          <div>
            <h2>How to use</h2>
            <p>
              To use AutoUserBGs, you first need to upload an image to discord.
            </p>
            <p>
              Then, you need to right click the image, and click{' '}
              <code>Copy Link</code>
            </p>
            <p>
              After that, paste it in the above, and remove the{' '}
              <code>https://cdn.discordapp.com/</code> part
            </p>
          </div>
        )}
      </div>
    );
  }
  componentWillMount() {
    fetch(
      (testEnv == true
        ? 'http://localhost:5500/whoamireally'
        : '/api/whoamireally') +
        '?auth=' +
        this.props.authTokenType +
        ' ' +
        this.props.authCode,
      {}
    ).then(async r => {
      const user = await r.json();
      this.setState({
        user,
        banner: '',
      });

      fetch(
        testEnv == true
          ? 'http://localhost:5500/getBanner/' + user.id
          : '/api/getBanner/' + user.id,
        {}
      ).then(async r => {
        const { banner } = await r.json();
        this.setState({
          user,
          banner,
        });
      });
    });
  }
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
  const { success } = props;
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
      <ProfileContent
        authCode={acode}
        authTokenType={att || 'Bearer'}
        success={success}
      />
    );
  else {
    if (typeof window !== 'undefined') document.location.replace('/api/login');
    return <div></div>;
  }
};

export default Profile;
