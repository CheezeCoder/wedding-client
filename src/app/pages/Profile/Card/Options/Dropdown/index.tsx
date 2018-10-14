import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { EChildren } from 'app/lib/configuration';
import { observer } from 'mobx-react';

interface DropdownProps {}

export const Dropdown: React.StatelessComponent<DropdownProps> = observer(
  () => {
    const onChange = (event) => {
      ProfileStore.updateChildrenAttending(event.target.value);
    };
    return (
      <div className={Styles.root}>
        <select onChange={onChange} value={ProfileStore.childrenAttending}>
          <option value={EChildren.None} className="option--tag">
            &nbsp;&nbsp;
            {EChildren.None}
          </option>
          <option value={EChildren.One} className="option--tag">
            &nbsp;&nbsp;
            {EChildren.One}
          </option>
          <option value={EChildren.Two} className="option--tag">
            &nbsp;&nbsp;
            {EChildren.Two}
          </option>
          <option value={EChildren.Three} className="option--tag">
            &nbsp;&nbsp;
            {EChildren.Three}
          </option>
          <option value={EChildren.Four} className="option--tag">
            &nbsp;&nbsp;
            {`${EChildren.Four} (seriously?)`}
          </option>
        </select>
      </div>
    );
  }
);
