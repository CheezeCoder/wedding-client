import * as React from 'react';
import * as Style from './style.css';

interface IntroductionProps {}

export const Introduction: React.StatelessComponent<IntroductionProps> = () => (
  <p className={Style.root}>
    The largest island of the Ionian Sea, Kefalonia is a very charming place.
    Although it has developed over the last years as a family destination, beach
    places in Kefalonia island never get crowded due to the large size of the
    island. Mostly famous for the exotic beaches, including Myrtos, Antisamos,
    Lourdas and Skala, the island was chosen for filming the Hollywood movie
    Captain Corelli's Mandolin. Apart from swimming, Kefalonia Greece also has
    many places to see, from picturesque villages to Medieval castles and
    beautiful monasteries. Fiscardo is the most cosmopolitan place with a port
    that receives many yachts every summer. Other nice villages to visit during
    your Kefalonia holidays are Argostoli, Sami and Assos and of course Lassi
    where we are getting married!
  </p>
);
