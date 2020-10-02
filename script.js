const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a media stream; pass that to the video element as its source object; the video plays after it hasfinished loading its metadata.
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
      }
  } catch (error) {
    console.log('Error caught: ', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On load
selectMediaStream();
