import { Controller } from "@hotwired/stimulus"
import WaveSurfer from 'wavesurfer.js'

// Connects to data-controller="audio-player"
export default class extends Controller {
  static values = { url: String};
  static targets = ["preview"]
  connect() {
    this.wavesurfer = WaveSurfer.create({
      container: this.previewTarget,
      waveColor: '#4F4A85',
      progressColor: '#383351',
      url: this.urlValue,
    })
  }

  togglePlaying(e) {
    e.preventDefault();
    this.wavesurfer.playPause();
    let link = e.target.closest("a");
    Array.from(link.children).forEach((child) =>
      child.classList.toggle("hidden")
    );
  }
}
