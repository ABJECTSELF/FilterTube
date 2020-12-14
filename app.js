var player;
var menuActive = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video", {
    width: 800,
    height: 600,
    videoId: "6W-A2GXrM5w",
    playerVars: {
      start: 29,
      color: "white",
      playlist: "6W-A2GXrM5w",
      loop: true,
      autoplay: true,
      enablejsapi: true,
      fs: 0
    },
    events: {
      onReady: play
    }
  });
  //player.setLoop();
}
 

function play() {
  player.playVideo();
  document.getElementById("button_play").className = "fas fa-pause";
}

function pause() {
  player.pauseVideo();
  document.getElementById("button_play").className = "fas fa-play";
}

function pausePlay() {
  if (player.getPlayerState() != 1) play();
  else pause();
}

function setMute() {
  if (player.isMuted() != true) {
    player.mute();
    document.getElementById("button_mute").className = "fas fa-volume-mute";
  } else {
    player.unMute();
    document.getElementById("button_mute").className = "fas fa-volume-up";
  }
}

function setURL() {
  var id = document.getElementById("vid_id").value;
  if (id == "") id = "6W-A2GXrM5w";
  player.cueVideoByUrl(
    "http://www.youtube.com/v/" +
      id +
      "?version=3&loop=1&enablejsapi=1&playlist=" +
      id,
    0
  );
  player.playVideo();
}

/* Deprecated - Keep on hand in case I want to implement
an all-filter toggle switch.
function toggleFilter(){
  if (!document.getElementById("swt_filters").checked)
    document.getElementById("video").style.filter = "";
  else
    setFilter("brightness");
}
*/

function setFilter() {
  var val = 0;
  var target = document.getElementById("video");
  var filters = "";
  /*I would prefer to use a for-loop to iterate through each
  checkbox and build the filter string dynamically. However,
  the fact that the filter style takes different signage
  for pixels, percentages and degrees sadly makes it more
  efficient to handle each filter separately.
  */
  if (document.getElementById("brightness").checked) {
    val = document.getElementById("form_brightness");
    filters += "brightness(" + val.value * 2 + "%) ";
  }
  if (document.getElementById("contrast").checked) {
    val = document.getElementById("form_contrast");
    filters += "contrast(" + val.value * 2 + "%) ";
  }
  if (document.getElementById("saturate").checked) {
    val = document.getElementById("form_saturate");
    filters += "saturate(" + val.value * 2 + "%)";
  }
  if (document.getElementById("blur").checked) {
    val = document.getElementById("form_blur");
    filters += "blur(" + val.value + "px)";
  }
  if (document.getElementById("sepia").checked) {
    val = document.getElementById("form_sepia");
    filters += "sepia(" + val.value + "%)";
  }
    if (document.getElementById("invert").checked) {
    val = document.getElementById("form_invert");
    filters += "invert(" + val.value + "%)";
  }
  if (document.getElementById("hue").checked) {
    val = document.getElementById("form_hue");
    filters += "hue-rotate(" + val.value * 2 + "deg)";
  }
  //Apply all filters to CSS here.
  target.style.filter = filters;
  }

function toggleMenu(){
  var menu = document.getElementById("topScreen");
  var button = document.getElementById("navbar-toggler");
  menuActive = !menuActive;
  if (menuActive){
    menu.style.transform = "translateY(130px)";
    menu.style.backgroundColor = "rgba(28, 36, 41, 0.75)";
    button.style.transform = "rotate(180deg)";
  }
  else{
    menu.style.transform = "translateY(0px)";
    menu.style.backgroundColor = "rgba(39, 47, 54, 0.5)";
    button.style.transform = "rotate(0deg)";
  }
}

function showTip(id){
  tip = document.getElementById(id);
  tip.style.opacity = "80%";
}

function removeTip(id){
  tip = document.getElementById(id);
  tip.style.opacity = "0%";
}