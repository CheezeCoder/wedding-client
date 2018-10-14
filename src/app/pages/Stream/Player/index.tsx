import * as React from 'react';
import * as Styles from './styles.css';
import TwitchPlayer from 'react-player/lib/players/Twitch';

interface PlayerProps {}

export const Player: React.StatelessComponent<PlayerProps> = () => (
  <div className={Styles.root}>
    <TwitchPlayer
      className={Styles.reactplayer}
      config={{
        channel: 'cheezekoder',
        layout: 'video-with-chat',
        allowfullscreen: true
      }}
      url="https://www.twitch.tv/chrisandmy2018"
      playing
    />
  </div>
);
