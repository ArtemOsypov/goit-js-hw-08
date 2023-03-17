import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});

localStorage.setItem('videoplayer-current-time', '');
