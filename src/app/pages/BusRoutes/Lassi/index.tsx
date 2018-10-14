import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import LassiPic from 'assets/images/Lassi.jpg';
import * as Styles from './styles.css';

export class Lassi extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Lassi Hotel</h1>
          <h2>16:15</h2>
          <div className={Styles.details}>
            Residents of Lassi Hotel! Your are being picked up at the entrance
            to the hotel! Nice and Easy!
          </div>
          <img src={LassiPic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
