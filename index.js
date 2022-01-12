const Youtube = require('yt-live-url');
const twitch = require("twitch-m3u8");

var stream_url = process.argv[2];

if(stream_url){

  if(stream_url.includes('twitch')){
    var channelName =stream_url.split('https://www.twitch.tv/')[1];
    if(channelName == null){
      console.log('Passe uma url do canal de streaming da twitch válido');
      return;
    }
    twitch.getStream(channelName)
    .then(data => console.log(data))
    .catch(err => console.error(err));
  }else if(stream_url.includes('youtube')){
    var channelId =stream_url.split('https://www.youtube.com/channel/')[1];
    if(channelId == null){
      console.log('Passe uma url de um canal do youtube válido');
      return;
    }
    Youtube.getStream(channelId)
    .then(data => console.log(data))
    .catch(err => console.error(err));

  }else{
    console.log('Passe a url de um streaming do youtube ou da twitch');
  }


}else{
  console.log('Passe a url de um streaming do youtube ou da twitch');
}
