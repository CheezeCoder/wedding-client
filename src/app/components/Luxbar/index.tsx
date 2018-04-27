import * as React from 'react';
import { LuxbarHeader } from './LuxbarHeader';
import { LuxbarItem } from './LuxbarItem';
import * as style from './style.css';

interface LuxbarProps {}

export const Luxbar: React.StatelessComponent<LuxbarProps> = () => (
  <header className="luxbar-fixed">
    <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
    <div
      className={`
        luxbar-menu luxbar-menu-right luxbar-menu-light 
        ${style.backgroundWhite}
        `}
    >
      <ul className={`luxbar-navigation ${style.backgroundWhite}`}>
        <LuxbarHeader />
        <LuxbarItem text="Home" path="" />
        <LuxbarItem text="Details" path="details" />
        <LuxbarItem text="Gifts" path="gifts" />
        <LuxbarItem text="RSVP" path="rsvp" />
      </ul>
    </div>
  </header>
);
