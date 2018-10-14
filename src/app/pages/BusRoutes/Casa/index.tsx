import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import CasaMap from 'assets/images/casa.png';
import * as Styles from './styles.css';

export class Casa extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Casa Maravillosa</h1>
          <h2>16:45</h2>
          <div className={Styles.details}>
            Residents of Casa Maravillosa! You are being picked up at the
            location indicated on the map below! You are the last stop on the
            route so their might be a delay.
          </div>
          <img src={CasaMap} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
