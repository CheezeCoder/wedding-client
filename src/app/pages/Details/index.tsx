import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { Introduction } from './Introduction';
import { Map } from './Map';
import { Timeline } from './Timeline';
import { Location } from './Location';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import * as Styles from './style.css';

export class Details extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <Map />
        <div className={Styles.content}>
          <Introduction />
          <Timeline />
          <Location />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
