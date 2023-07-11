const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));const t=function(e){};o.on("timeupdate",t),o.off("timeupdate",t);
//# sourceMappingURL=02-video.11fbe823.js.map
