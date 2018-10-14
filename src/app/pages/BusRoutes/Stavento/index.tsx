import * as React from 'react';
import { Spacer } from 'app/shared/Spacer';
import { Page } from 'app/containers/Page';
import { Footer } from 'app/shared/Footer';
import { DecorativeBlock } from 'app/shared/DecorativeBlock';
import StaventoPic from 'assets/images/stavento.png';
import * as Styles from './styles.css';

export class Stavento extends React.Component {
  render() {
    return (
      <Page>
        <Spacer />
        <div className={Styles.content}>
          <h1>Stavento Appartments & Villa Infinite Blue</h1>
          <h2>16:30</h2>
          <div className={Styles.details}>
            Residents of Stavento Appartments and Villa Infinite Blue! You are
            being picked up at the corner of your street just up the road. This
            is indicated on the map below. Please make sure you are there for
            the appointed time!
          </div>
          <img src={StaventoPic} alt="map of casa maravillosa" />
        </div>
        <DecorativeBlock />
        <Footer />
      </Page>
    );
  }
}
