import * as React from 'react';
import * as Styles from './styles.css';
import image from 'assets/images/blog2.jpg';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  header: string;
}

export const NewsCardTwo: React.StatelessComponent<NewsCardProps> = ({
  header
}) => (
  <div className={Styles.root}>
    <img src={image} alt="for those who cant make it" />
    <div className={Styles.date}>
      <div className={Styles.datecircle} />August 08th at 08:04 pm
    </div>
    <header>
      <h1>{header}</h1>
    </header>
    <div className={Styles.cardbody}>
      <p>
        Hello everyone!  Hope your all doing well!  Our wedding is fast
        approaching and even though we know you can't be there we want to our
        best to make you feel like your part of our special day.
      </p>

      <p>
        If you have any telegrams or speeches you would like read in lieu of
        your absence please send them to Linn Andersson or Malin Anderberg, our
        very talented masters' of cermony.  If you have any other special
        requests please don't be afraid to contact them and if they can, they'll
        help you out!
      </p>

      <ul>
        <li>
          Linn Andersson:{' '}
          <a href="mailto:linn.ingrid.kristina@gmail.com">
            linn.ingrid.kristina@gmail.com
          </a>{' '}
        </li>
        <li>
          Malin Anderberg:{' '}
          <a href="mailto:malinedith@gmail.com">malinedith@gmail.com</a>{' '}
        </li>
      </ul>

      <h2>Live Stream</h2>
      <p>
        We are also planning on live streaming the ceremony and possibly the
        dance.  Stay tuned for more details about this.  You can always check
        out the <Link to="/news">news page</Link> of the wedding website for
        more details as well. We'll send you a new email when we have more
        details!
      </p>
    </div>
  </div>
);
