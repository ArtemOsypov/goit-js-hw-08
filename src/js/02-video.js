import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const SAVED_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ duration, percent, seconds }) {
    localStorage.setItem(SAVED_TIME, seconds);
  }, 500)
);

const currentTime = localStorage.getItem(SAVED_TIME || 0);

player
  .getCurrentTime(currentTime.seconds)
  .then(function (seconds) {})
  .catch(function (error) {});

player.setCurrentTime(currentTime);
