import * as React from 'react';
import {
  GoogleMap,
  GoogleMapProps,
  withGoogleMap,
  WithGoogleMapProps,
  withScriptjs,
  WithScriptjsProps,
  Marker
} from 'react-google-maps';
import { MapInfoBox } from './MapInfoBox';
import { ViewStore } from 'app/stores/ViewStore';

export const GoogleMapComponent: React.ComponentClass<
  GoogleMapProps & WithGoogleMapProps & WithScriptjsProps
> = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{
        lat: 38.156045,
        lng: 20.477157
      }}
    >
      <Marker
        position={{ lat: 38.156045, lng: 20.477157 }}
        onClick={() => ViewStore.toggleMapInfoBox(ViewStore.showMapInfoBox)}
      >
        <MapInfoBox />
      </Marker>
    </GoogleMap>
  ))
);
