import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import MediteraneePic from 'assets/images/Mediteranee.jpg';
import * as Styles from './styles.css';

export class Mediterannee extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Hotel Mediterranee</h1>
          <h2>16:20</h2>
          <div className={Styles.details}>
            Residents of Hotel Mediterranee! Your are being picked up at the
            entrance to the hotel! Nice and Easy!
          </div>
          <img src={MediteraneePic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
