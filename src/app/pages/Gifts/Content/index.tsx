import * as React from 'react';
import * as Styles from './styles.css';
import { ContentStore } from 'app/stores/ContentStore';

interface ContentProps {}

export const Content: React.StatelessComponent<ContentProps> = () => (
  <div className={Styles.root}>
    {ContentStore.ThankYou.Content.paragraphs.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
);
