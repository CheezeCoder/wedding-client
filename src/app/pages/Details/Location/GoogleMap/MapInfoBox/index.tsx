import * as React from 'react';
import { InfoWindow, InfoWindowProps } from 'react-google-maps';
import * as styles from './styles.css';
import { ViewStore } from 'app/stores/ViewStore';
import { observer } from 'mobx-react';
import VillaImg from 'assets/images/villa.jpg';
import { ContentStore } from 'app/stores/ContentStore';

const windowSize = window.innerWidth <= 992 ? 300 : 650;

export const MapInfoBox: React.SFC<InfoWindowProps> = observer(
  (props) =>
    ViewStore.showMapInfoBox && (
      <InfoWindow
        options={{ maxWidth: windowSize }}
        onCloseClick={() => {
          ViewStore.showMapInfoBox = !ViewStore.showMapInfoBox;
        }}
      >
        <div className={styles.window}>
          <img
            src={VillaImg}
            alt={ContentStore.Details.Locations.Us.InfoWindow.Image.alt}
            style={{ width: '50%' }}
          />
          <h1 className={styles.firstHeading}>
            {' '}
            {ContentStore.Details.Locations.Us.InfoWindow.Title}{' '}
          </h1>
          <div>
            <p> {ContentStore.Details.Locations.Us.InfoWindow.Text} </p>
          </div>
        </div>
      </InfoWindow>
    )
);
