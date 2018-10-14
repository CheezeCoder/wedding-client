import * as React from 'react';
import { EventsBanner } from './EventsBanner';
import * as styles from './styles.css';
import { Event } from './Event';
import { ContentStore, IEventRow } from 'app/stores/ContentStore';

export interface TimelineProps {}

const events = ContentStore.Details.Events.map((event) => {
  return (
    <Event
      url={event.Image.url}
      alt={event.Image.alt}
      rows={event.Rows as Array<IEventRow>}
      paragraphs={event.Details.paragraphs}
      title={event.Title}
      alternate={event.Alternate}
      key={event.Title}
    />
  );
});

export class Timeline extends React.Component<TimelineProps, any> {
  render() {
    return (
      <div className={styles.root}>
        <EventsBanner />
        {events}
      </div>
    );
  }
}
