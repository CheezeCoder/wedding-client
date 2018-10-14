import * as React from 'react';
import * as Styles from './styles.css';
import { Link } from 'react-router-dom';
import image from 'assets/images/Schdule.jpg';

interface NewsCardProps {
  header: string;
}

export const NewsCardFour: React.StatelessComponent<NewsCardProps> = ({
  header
}) => (
  <div className={Styles.root}>
    <img src={image} alt="colorful bus" />
    <div className={Styles.date}>
      <div className={Styles.datecircle} />September 01st at 11:57 am
    </div>
    <header>
      <h1>{header}</h1>
    </header>
    <div className={Styles.cardbody}>
      <p>
        Less than a week to go travellers! Ok! There is some important
        information coming here, so get your travel journals out and take note!
      </p>
      <p>
        We've updated the schedule of day with new times! These of course can
        all be found in detail on the <Link to="details">details page</Link>.
        The main thing to note here is that the ceremony will begin at 17:30!
        That means you'll all need to be there before that. But feat not! As
        mentioned buses are provided.
      </p>
      <p>
        Please note you will need to be at the pick up points at the designated
        times! The bus will wait no more than 10 minutes maximum from the
        designated time at each pickup point, this means that if there are any
        delays with the bus then it will wait even less! So its very important
        for you all to be at the pickup points. VERY IMPORTANT! Click on your
        hotel for detailed necessary information as to where to go to get picked
        up. The pickup points are as follows:
      </p>

      <ul className={Styles.points}>
        <li>
          <Link to="routes/grand">Kefalonia Grand</Link>
        </li>
        <li>
          <Link to="routes/oskar">Oskar's Studio and Emmas Studio</Link>
        </li>
        <li>
          <Link to="routes/lassi">Lassi Hotel</Link>
        </li>
        <li>
          <Link to="routes/mediterannee">Mediterannee Hotel</Link>
        </li>
        <li>
          <Link to="routes/liberatos">Liberatos Village</Link>
        </li>
        <li>
          <Link to="routes/thalassa">
            Sunny Beach Air B&nB and Ionian Diamond Hotel
          </Link>
        </li>
        <li>
          <Link to="routes/lorenzo">
            San Lorenzo Village and Princess Hotel
          </Link>
        </li>
        <li>
          <Link to="routes/stavento">
            Stavento Appartments and Infinite Blue Studios
          </Link>
        </li>
        <li>
          <Link to="routes/casa">Casa Maravillosa</Link>{' '}
        </li>
      </ul>

      <p>
        Please let us know right away if you are not on the list and or don't
        understand anything!! If you are not on the list you can always make
        your way to any of the given pickup points. Please do not change pickup
        points from your hotel as we have several busses and this will screw up
        seat availability.
      </p>
    </div>
  </div>
);
