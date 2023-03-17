import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const SAVED_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(SAVED_TIME, JSON.stringify(data));
  }, 500)
);
const currentStopTime = localStorage.getItem(SAVED_TIME);
const currentTime = JSON.parse(currentStopTime);

player
  .getCurrentTime(currentTime.seconds)
  .then(function (seconds) {})
  .catch(function (error) {});

player.setCurrentTime(currentTime.seconds || 0);
