import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import LiberatosPic from 'assets/images/Liberatos.jpg';
import * as Styles from './styles.css';

export class Liberatos extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Liberatos Village Hotel</h1>
          <h2>16:15</h2>
          <div className={Styles.details}>
            Residents of Liberatos Village! Your are being picked up at the
            entrance to the hotel! Nice and Easy!
          </div>
          <img src={LiberatosPic} alt="map of casa Liberatos" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
