import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);




function timeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.on('timeupdate', throttle(timeUpdate, 1000));

localStorage.setItem('videoplayer-current-time', timeUpdate);


player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time'))).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});