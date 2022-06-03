import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);




function timeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.on('timeupdate', throttle(timeUpdate, 1000));


player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));
