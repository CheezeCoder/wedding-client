import * as React from 'react';
import * as Styles from './styles.css';
import { Dropdown } from 'app/pages/Profile/Card/Options/Dropdown';
import { GuestCheck } from 'app/pages/Profile/Card/Options/GuestCheck';
import { MealType } from 'app/pages/Profile/Card/Options/MealChoice';
import { ProfileStore } from 'app/stores/ProfileStore';
import { AdultsDropdown } from 'app/pages/Profile/Card/Options/AdultsDropdown';

interface OptionsProps {}

export const Options: React.StatelessComponent<OptionsProps> = () => (
  <div className={Styles.root}>
    <h3>Number Attending:</h3>
    <h4>Kids: </h4>
    <Dropdown />
    {ProfileStore.single ? null : <h4> Adults: </h4>}
    {ProfileStore.single ? <GuestCheck /> : <AdultsDropdown />}
    <MealType />
  </div>
);
