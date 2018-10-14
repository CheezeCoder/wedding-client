import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';

interface GuestCheckProps {}

export const GuestCheck: React.StatelessComponent<GuestCheckProps> = observer(
  () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      ProfileStore.updateGuestAttendance(event.target.checked);
    };

    return (
      <div className={Styles.root}>
        <h4>Will you be bringing a guest? (Check the box for yes)</h4>
        <input
          type="checkbox"
          onChange={onChange}
          checked={ProfileStore.guest}
        />
      </div>
    );
  }
);
