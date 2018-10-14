import * as React from 'react';
import * as Styles from './styles.css';
import image from 'assets/images/blog1.jpg';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  header: string;
}

export const NewsCardOne: React.StatelessComponent<NewsCardProps> = ({
  header
}) => (
  <div className={Styles.root}>
    <img src={image} alt="wedding is coming soon" />
    <div className={Styles.date}>
      <div className={Styles.datecircle} />July 12th at 11:55 pm
    </div>
    <header>
      <h1>{header}</h1>
    </header>
    <div className={Styles.cardbody}>
      <h2>Transportation</h2>
      <p>
        First order of business is we NEED you to fill in your accomodation
        details in the profile page! So head on over and{' '}
        <Link to="/guest">log in </Link> to your profile and let us know where
        your staying!
      </p>

      <p>
        This is we can arrange pick up from your hotel to the wedding ceremony.
        The busses will also take you from the ceremony to the reception and
        home again as well! This way you won't have to worry at all about
        transportation!
      </p>
      <h2>Speeches</h2>
      <p>
        Our wonderful Masters of Ceremonies are now awaiting your speeches and
        requests for the reception!
      </p>
      <p>
        We appreciate any speeches/dances/acrobatics ;) that you'd love to share
        but try to keep them under 5 minutes. Of course if you have any unusual
        requests or ideas please don't be afraid to just contact our MCs! They
        are wonderful people and will be more than happy to help you out and
        discuss your ideas! Please get these in as soon as possible to the MCs
        so that they have time to plan.
      </p>
      <p>
        Please let our MCs know right now if you know you want to speak! Even if
        you have no idea what you want to say. This will help them out a lot!
      </p>
      <p>
        There will be audio video equipment available if any video or sound is
        required!
      </p>
      <h4>The Masters of Ceremonies</h4>
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
      <h2>Dress Code</h2>
      <p>
        In case you missed it the dress code is all white! No exceptions! See
        the <Link to="/details">details</Link> page for more information!
      </p>
      <h2>Gifts</h2>
      <p>
        Also in case anyone is interested in giving a gift (ABSOLUTELY NOT
        NECESSARY!) there is gift information on the{' '}
        <Link to="/gifts">gifts page</Link>.
      </p>
    </div>
  </div>
);
