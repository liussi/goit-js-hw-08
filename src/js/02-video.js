import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));

    function timeUpdate (data){
        localStorage.setItem(STORAGE_KEY, data.seconds);
        console.log(data.seconds);
    };
       
const saveTime = localStorage.getItem(STORAGE_KEY) ?? 0;

player.setCurrentTime(saveTime);
    

