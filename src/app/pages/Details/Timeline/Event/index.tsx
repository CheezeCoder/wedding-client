import * as React from 'react';
import { Image } from 'app/pages/Details/Image';
import { Info } from './Info';
import { Detail } from 'app/pages/Details/Timeline/Event/Detail';
import { IEventRow } from 'app/stores/ContentStore';
import * as Style from './styles.css';

interface EventProps {
  url: string;
  alt: string;
  rows: Array<IEventRow>;
  paragraphs: Array<string>;
  title: string;
  alternate?: boolean;
}

export const Event: React.SFC<EventProps> = (props) => {
  return (
    <div
      className={`${Style.root} 
      ${props.alternate ? Style.alternater : Style.regular}`}
    >
      <span className={`${Style.imageblock} ${Style.eventblock}`}>
        <Image imgUrl={props.url} imgAlt={props.alt} />
      </span>
      <span className={`${Style.infoblock} ${Style.eventblock} `}>
        <span className={`${Style.innerinfo}`}>
          <h2>{props.title}</h2>
          <Info rows={props.rows as Array<IEventRow>} />
          <Detail paragraphs={props.paragraphs} />
        </span>
      </span>
    </div>
  );
};
