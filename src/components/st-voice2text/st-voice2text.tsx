import { Component, State, Prop } from '@stencil/core';


@Component({
  tag: 'st-voice2text',
  styleUrl: 'st-voice2text.scss'
})
export class Voice2Text {

  @Prop() lang: string = 'es-ES';

  @State() input       : any;
  @State() recognition : any;
  @State() started     : boolean = false;

  componentDidLoad() {
    this.input = document.getElementById('voice2text-input');
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onerror = function(err) { console.log(err) }
      this.recognition.onresult = function(event) {
        this.input = event.results[0][0].transcript;
      }
    } else {
      console.log('webkitSpeechRecognition not supported :(');
    }
  }

  start() {
    this.started = true;
    this.recognition.lang = this.lang;
    this.recognition.start();
  }

  stop() {
    this.started = false;
    this.recognition.stop();
  }

  render() {
    return (
      <div class="container">
        <input type="text" id="voice2text-input"></input>
        {
          this.started === false ?
          (<button onClick={() => this.start()}>Start</button>)
          :
          (<button onClick={() => this.stop()}>Stop</button>)
        }
      </div>
    );
  }
}
