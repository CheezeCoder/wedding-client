import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';
import { ViewStore } from 'app/stores/ViewStore';

interface AccommodationProps {}

export const Accommodation: React.StatelessComponent<
  AccommodationProps
> = observer(() => {
  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    ProfileStore.updateAccomodationName(event.target.value);
  };
  const onChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    ProfileStore.updateAccomodationAddress(event.target.value);
  };

  return (
    <div
      className={`${Styles.root} ${
        ViewStore.accomodationNotFilled ? '' : Styles.filled
      }`}
      id="accomodation"
    >
      <h3>Accomodation:</h3>
      <h5>
        We need to know where you are staying! (so the busses can pick you up
        for the ceremony)
      </h5>
      <span>Hotel Name:</span>
      <input
        type="text"
        className={Styles.accommodation}
        onChange={onChangeName}
        value={ProfileStore.accomodation.name}
      />
      <span>Hotel Address:</span>
      <input
        type="text"
        className={Styles.accommodation}
        onChange={onChangeAddress}
        value={ProfileStore.accomodation.address}
      />
    </div>
  );
});
