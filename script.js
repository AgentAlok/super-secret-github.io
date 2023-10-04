const logo = document.querySelectorAll("#logo path");
// Get the audio element
var audio = document.getElementById("myAudio");

// Restart the audio when it ends
audio.addEventListener(
  "ended",
  function () {
    audio.currentTime = 0;
    audio.play();
  },
  false
);

// Start playing the audio
audio.play();

logo.forEach((path, i) => {
  console.log(`Stroke length of letter ${i} is ${path.getTotalLength()}`);
});
