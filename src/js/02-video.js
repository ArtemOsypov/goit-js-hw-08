import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const SAVED_TIME = 'videoplayer-current-time';

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(SAVED_TIME, JSON.stringify(data));
  }, 500)
);

// localStorage.setItem(SAVED_TIME, '');

// player
//   .getCurrentTime()
//   .then(function (seconds) {
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });
