import { Component, State } from '@stencil/core';


@Component({
  tag: 'st-voice2text',
  styleUrl: 'st-voice2text.scss'
})
export class Voice2Text {


  @State() recognition: any;

  componentDidLoad() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onerror = function(err) { console.log(err) }
      this.recognition.onresult = function(event) {
        console.log(event.results[0][0].transcript);
      }
    } else {
      console.log('webkitSpeechRecognition not supported :(');
    }
  }

  start() {
    this.recognition.lang = 'es-ES';
    this.recognition.start();
  }

  stop() {
    this.recognition.stop();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.start()}>
          Start
        </button>
        <button onClick={() => this.stop()}>
          Stop
        </button>
      </div>
    );
  }
}
