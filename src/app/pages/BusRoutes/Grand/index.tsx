import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import GrandPic from 'assets/images/Grand.jpg';
import * as Styles from './styles.css';

export class Grand extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Kefalonia Grand Hotel</h1>
          <h2>16:00</h2>
          <div className={Styles.details}>
            Residents of Kefalonia Grand Hotel! Your are being picked up at the
            entrance to the hotel! Nice and Easy!
          </div>
          <img src={GrandPic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
