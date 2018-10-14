import * as React from 'react';
import * as Styles from './styles.css';
import { ContentStore } from 'app/stores/ContentStore';
import { TextArea } from 'app/pages/Profile/Card/Considerations/TextArea';
import { Link } from 'react-router-dom';

interface ConsiderationsProps {}

export const Considerations: React.StatelessComponent<
  ConsiderationsProps
> = () => (
  <div className={Styles.root}>
    <h3>Other Considerations:</h3>
    <p>{ContentStore.Profile.Considerations.paragraphs.one}</p>
    <TextArea />
    <p>
      {`${ContentStore.Profile.Considerations.paragraphs.two} `}
      <Link className="details" to="/details">
        details page.
      </Link>
    </p>
  </div>
);
