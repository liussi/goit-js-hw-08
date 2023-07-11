
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function( data) {  
    };
    
    player.on('timeupdate', onPlay);
    player.off('timeupdate', onPlay);

