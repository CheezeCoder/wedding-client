import * as React from 'react';
import { Banner } from 'app/pages/Details/Banner';
import * as Styles from './styles.css';
import { ContentStore } from 'app/stores/ContentStore';
import { Image } from 'app/pages/Details/Image';
import { GoogleMapComponent } from './GoogleMap';

interface LocationProps {}

const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyD8TqY0Mo7y4Z2Z2s5H7fLn5blmnEnrfE0';

export const Location: React.StatelessComponent<LocationProps> = () => (
  <div className={Styles.root}>
    <span className={Styles.override}>
      {<Banner title="Where we are staying" />}
      {<Image imgUrl="MakrisBeach.jpg" imgAlt="beach" />}
      <h2>{ContentStore.Details.Locations.Us.Beach}</h2>
      {ContentStore.Details.Locations.Us.Details.paragraphs.map(
        (paragraph, index) => <p key={index}>{paragraph}</p>
      )}
      <div className="maps" />
      <GoogleMapComponent
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </span>
  </div>
);
