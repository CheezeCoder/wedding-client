import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Footer } from 'app/shared/Footer';
import { Page } from 'app/containers/Page';
import { InnerWrapper } from 'app/shared/InnerWrapper';
import Login from 'app/pages/Guest/Login';
import { Details } from 'app/pages/Guest/Details';
import * as Styles from './styles.css';

interface GuestProps {}

export const Guest: React.StatelessComponent<GuestProps> = () => (
  <Page>
    <div className={Styles.root}>
      <Spacer />
      <Spacer />
      <InnerWrapper>
        <Login />
        <Details />
      </InnerWrapper>
    </div>
    <Footer dark sticky />
  </Page>
);
