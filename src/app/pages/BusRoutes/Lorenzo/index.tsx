import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import LorenzoPic from 'assets/images/Lorenzo.png';
import * as Styles from './styles.css';

export class Lorenzo extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>San Lorenzo Village & Princess Hotel</h1>
          <h2>16:30</h2>
          <div className={Styles.details}>
            Residents of San Lorenzo Village and Princess Hotel! You are being
            picked up at the entrance to the Princess Hotel. This means all
            residents of San Lorenzo Village will need to walk over to the
            entrance of the Princess Hotel as listed on the map.
          </div>
          <img src={LorenzoPic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
