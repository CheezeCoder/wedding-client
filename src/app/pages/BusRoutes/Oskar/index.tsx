import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import OskarPic from 'assets/images/Oskar.png';
import * as Styles from './styles.css';

export class Oskar extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Oskar's Studio and Emma's Studio</h1>
          <h2>16:30</h2>
          <div className={Styles.details}>
            Residents of Oska's studio and Emma's Studio! You are being picked
            up at the entrance to Oskar's studio! This means that all residents
            of Emma's studio will need to make there way to the the entrance of
            Oska's studio as shown on the map below for the pick up time.
          </div>
          <img src={OskarPic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
