import { Controller } from "@hotwired/stimulus"
import WaveSurfer from 'wavesurfer.js'

// Connects to data-controller="audio-player"
export default class extends Controller {
  static values = { url: String};
  connect() {
    this.wavesurfer = WaveSurfer.create({
      container: this.element,
      waveColor: '#4F4A85',
      progressColor: '#383351',
      url: this.urlValue,
      mediaControls: true,
    })
  }
}
