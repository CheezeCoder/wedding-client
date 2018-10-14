import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import ThalassaPic from 'assets/images/Thalassa.png';
import * as Styles from './styles.css';

export class Thalassa extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Sunny Beach Villa & Ionian Diamond Appartments</h1>
          <h2>16:25</h2>
          <div className={Styles.details}>
            Residents of Sunny Beach Villa and Ionian Diamond Appartments! The
            bus is a little difficult to get in to your streets so you pick up
            point is at the Thalassa Boutique Hotel as shown on the map below.
            Please make sure to be there on time!
          </div>
          <img src={ThalassaPic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
