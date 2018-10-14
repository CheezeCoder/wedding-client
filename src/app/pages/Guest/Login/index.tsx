import * as React from 'react';
import * as Styles from './styles.css';
import { ViewStore } from 'app/stores/ViewStore';
import { auth } from 'app/stores/FirebaseStore';
import { Redirect } from 'react-router';
import { observer } from 'mobx-react';
import { Error } from 'app/pages/Guest/Login/Error';

export interface LoginProps {}

export interface LoginState {
  email: string;
  password: string;
}

@observer
export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onComponentDidMount() {}

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      if (result.user) {
        ViewStore.toggleWrongPassword(false);
        ViewStore.toggleLogin(true);
      } else {
        ViewStore.toggleWrongPassword(true);
        ViewStore.toggleLogin(false);
      }
    } catch (error) {
      ViewStore.toggleWrongPassword(true);
      ViewStore.toggleLogin(false);
    }
  };

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value } as LoginState);
  };

  render() {
    return ViewStore.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <form className={Styles.root}>
        <div className={Styles.title}>Let us know if your coming!</div>
        <ul className={Styles.login}>
          <li>
            <input
              type="text"
              className="iemail iinput"
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              className="ipass iinput"
              placeholder="Password"
              onChange={this.onChange}
            />
          </li>
          <li>
            <div>
              <button
                className={Styles.button}
                onClick={this.onSubmit}
                type="submit"
              >
                Log In
              </button>
            </div>
          </li>
        </ul>
        {ViewStore.wrongPassword ? <Error /> : null}
      </form>
    );
  }
}
