const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream; pass that to video element and play.
async function selectMediaStream() {
  try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  } catch (error) {
    console.log('Error caught: ', error);
  }
}

// On load
selectMediaStream();
