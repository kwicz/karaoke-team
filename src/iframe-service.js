export class IframeService {
  constructor(){
    this.player
  }

  
    onYouTubePlayerAPIReady(id) {
      this.player = new YT.Player("player", {
        // height: "200",
        // width: "400",
        videoId: id,
        autoplay: 1,
        modestbranding: 1
        // events: {
        //   'onReady': onPlayerReady,
        //   'onStateChange': onPlayerStateChange,
        // }
      });
      console.log("this.player: ", this.player);
      this.player.addEventListener("onReady", "onYouTubePlayerReady");
      this.player.addEventListener("onStateChange", "onYouTubePlayerStateChange");
    }

  // 4. The API will call this function when the video this. is ready.
  onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  onPlayerStateChange(event) {
    let done = false;
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  playVideo(){
    this.player.playVideo();
  }
  stopVideo() {
    this.player.stopVideo();
  }
  pauseVideo(){
    this.player.pauseVideo();
  }
  playNextVideo(){
    this.player.nextVideo();
  }
  playerGetVolume(){
    this.player.getVolume
  }
  playerSetVolume(number){
    this.player.setVolume(number)
  }

}