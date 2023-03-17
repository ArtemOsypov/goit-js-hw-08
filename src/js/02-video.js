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
    console.log(data);
  }, 500)
);
const currentStopTime = localStorage.getItem(SAVED_TIME);
const currentTime = JSON.parse(currentStopTime);

player
  .getCurrentTime(currentTime.seconds)
  .then(function (seconds) {
    // seconds = the current playback position
  })
  .catch(function (error) {
    // an error occurred
  });

player.setCurrentTime(currentTime.seconds || 0);
