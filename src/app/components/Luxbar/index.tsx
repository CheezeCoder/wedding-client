import * as React from 'react';
import { LuxbarHeader } from './LuxbarHeader';
import { LuxbarItem } from './LuxbarItem';
import * as style from './style.css';
import { ViewStore } from 'app/stores/ViewStore';
import { observer } from '../../../../node_modules/mobx-react';

interface LuxbarProps {
  opactiy?: number;
}

export const Luxbar: React.StatelessComponent<LuxbarProps> = observer(
  ({ opactiy }) => (
    <header className="luxbar-fixed" style={{ opacity: opactiy }}>
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
          <LuxbarItem text="News" path="news" />
          <LuxbarItem text="Stream" path="stream" />
          <LuxbarItem text="Gifts" path="gifts" />

          {ViewStore.loggedIn ? (
            <LuxbarItem text="Profile" path="profile" />
          ) : (
            <LuxbarItem text="Guest" path="guest" />
          )}
        </ul>
      </div>
    </header>
  )
);
