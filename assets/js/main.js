(function ($) {
    "use strict";
  
   
    /* ========================== 
    Sticky Header
   ==========================*/
   $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $(".header__style").addClass("sticky");
    } else {
      $(".header__style").removeClass("sticky");
    }
  });



  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var videoElement = document.getElementById('player');
  var videoId = videoElement.getAttribute('data-video-id');

  if (!videoId) {
    console.error('No video ID provided in the HTML element.');
    return; // Exit the script to avoid errors
  }

  // Create a global YouTube player variable.
  window.player = null;

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  window.onYouTubeIframeAPIReady = function () {
    window.player = new YT.Player('player', {
      videoId: videoId, // Use the dynamically retrieved videoId
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': window.onPlayerReady,
        'onStateChange': window.onPlayerStateChange
      }
    });
  };

  // The API will call this function when the video player is ready.
  window.onPlayerReady = function (event) {
    document.getElementById("play").addEventListener("click", function () {
      event.target.playVideo();
    });
  };

  // The API calls this function when the player's state changes.
  window.onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.PLAYING && !window.done) {
      window.done = true;
    }
  };

  window.stopVideo = function () {
    if (window.player) {
      window.player.stopVideo();
    }
  };

  // Initialize the done variable
  window.done = false;



  // Player Button
  var toggleIcon = document.querySelectorAll('.cover')

  toggleIcon.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelectorAll('.play-btn-wrap').forEach((el) => {
        el.classList.add('hide')
      })
    })
  })



}(jQuery));