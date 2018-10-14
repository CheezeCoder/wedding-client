import * as React from 'react';

import { Redirect } from 'react-router-dom';
import { Page } from 'app/containers/Page';
import { InnerWrapperAlt } from 'app/shared/InnerWrapper';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import { Footer } from 'app/shared/Footer';
import { Card } from 'app/pages/Profile/Card';
import { Spacer } from 'app/shared/Spacer';
import { ProfileStore } from 'app/stores/ProfileStore';
import { auth } from 'app/stores/FirebaseStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Style from './styles.css';

import { Loader } from 'app/shared/Loader';
import { ViewStore } from 'app/stores/ViewStore';
import { observer } from 'mobx-react';
import { SmoothScroll } from 'app/lib/smoothScroll';

interface ProfileProps {}

enum EAuthState {
  Authenticated,
  Pending,
  Unauthorized
}

@observer
export class Profile extends React.Component<ProfileProps, any> {
  state = {
    authenticated: EAuthState.Pending
  };

  async componentWillMount() {
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        await ProfileStore.onLoad();
        this.setState({ authenticated: EAuthState.Authenticated });
      }
      if (!user) this.setState({ authenticated: EAuthState.Unauthorized });
    });
  }

  public render() {
    if (this.state.authenticated === EAuthState.Pending || ViewStore.isSaving) {
      return <Loader />;
    }
    if (this.state.authenticated === EAuthState.Unauthorized) {
      return <Redirect to="/guest" />;
    }

    if (ViewStore.wasSaved) {
      toast.success('Your changes have been saved.', {
        position: toast.POSITION.TOP_CENTER,
        className: Style.toasty
      });
    }

    if (ViewStore.isNotAnswered) {
      toast.error(`You'll need to let us know if you're attending or not!`, {
        position: toast.POSITION.TOP_CENTER,
        className: Style.toasterror
      });
      SmoothScroll.scrollTo('attend-dropdown');
    }

    if (ViewStore.accomodationNotFilled) {
      toast.error(`You'll need to let us where your staying!`, {
        position: toast.POSITION.TOP_CENTER,
        className: Style.toasterror
      });
      SmoothScroll.scrollTo('accomodation');
    }

    return (
      <Page>
        <div className={Style.root}>
          <ToastContainer />
          <Spacer color="white" />
          <Spacer color="white" />
          <InnerWrapperAlt>
            <Card />
          </InnerWrapperAlt>
          <DecorativeBlock height={500} />
          <Footer sticky />
        </div>
      </Page>
    );
  }
}
