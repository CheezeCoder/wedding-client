import * as React from 'react';
import { HeroBanner } from './HeroBanner';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';

export class Home extends React.Component {
  render() {
    return (
      <Page>
        <HeroBanner />
        <Footer alternate />
      </Page>
    );
  }
}
