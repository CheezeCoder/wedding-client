import * as React from 'react';
import * as Styles from './styles.css';
import image from 'assets/images/busmoney.jpg';

interface NewsCardProps {
  header: string;
}

export const NewsCardThree: React.StatelessComponent<NewsCardProps> = ({
  header
}) => (
  <div className={Styles.root}>
    <img src={image} alt="colorful bus" />
    <div className={Styles.date}>
      <div className={Styles.datecircle} />August 26th at 21:57 pm
    </div>
    <header>
      <h1>{header}</h1>
    </header>
    <div className={Styles.cardbody}>
      <p>
        Hey everyone! We've been running into some difficulties with buses for
        transportation of everyone from hotels to beach to reception and back.
        Not to be worried though! We have now found enough buses to get everyone
        where they need to be! This unfortunately was a much larger expense than
        we expected and we need everyone's help. However this will be a much
        cheaper alternative than cabs!
      </p>
      <p>
        We are therefore kindly and humbly asking everyone to bring 15€ per head
        to help us cover the costs. This would be collected by someone
        responsible for it on each bus.
      </p>
      <p>
        Thanks so much for your understanding and we'll see you all in just over
        a week!
      </p>
    </div>
  </div>
);
