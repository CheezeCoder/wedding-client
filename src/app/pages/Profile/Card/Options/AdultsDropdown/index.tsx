import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { observer } from 'mobx-react';

interface AdultsDropdownProps {}

export const AdultsDropdown: React.StatelessComponent<
  AdultsDropdownProps
> = observer(() => {
  const onChange = (event) => {
    ProfileStore.updateAdultsAttending(event.target.value);
  };
  return (
    <div className={Styles.root}>
      <select onChange={onChange} value={ProfileStore.adultsAttending}>
        <option value={1} className="option--tag">
          &nbsp;&nbsp;
          {1}
        </option>
        <option value={2} className="option--tag">
          &nbsp;&nbsp;
          {2}
        </option>
      </select>
    </div>
  );
});
