import * as React from 'react';
import * as Styles from './styles.css';
import { ProfileStore } from 'app/stores/ProfileStore';
import { EAttendance } from 'app/lib/configuration';
import { observer } from 'mobx-react';
import { ViewStore } from 'app/stores/ViewStore';

interface DropdownBlockProps {}

export const DropdownBlock: React.StatelessComponent<
  DropdownBlockProps
> = observer(() => {
  const onChange = (event) => {
    ProfileStore.updateAttendance(event.target.value);
  };
  return (
    <div
      className={`${Styles.root} ${
        ViewStore.isNotAnswered ? Styles.unanswered : ''
      }`}
      id="attend-dropdown"
    >
      <select onChange={onChange} value={ProfileStore.attending}>
        <option value={EAttendance.Unanswered} className="option--tag">
          {' '}
        </option>
        <option value={EAttendance.Accept} className="option--tag">
          &nbsp;&nbsp;
          {`will`}
        </option>
        <option value={EAttendance.Refuse} className="option--tag">
          &nbsp;&nbsp;
          {`will not`}
        </option>
      </select>
    </div>
  );
});
