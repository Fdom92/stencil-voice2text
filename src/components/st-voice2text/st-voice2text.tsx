import { Component, State, Prop, Element } from '@stencil/core';


@Component({
  tag: 'st-voice2text',
  styleUrl: 'st-voice2text.scss'
})
export class Voice2Text {

  @Prop() lang: string = 'es-ES';

  @Element() element;

  @State() recognition : any;
  @State() started     : boolean = false;

  componentDidLoad() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onerror = function(err) { console.error(err) }
      this.recognition.onresult = function(event) {
        this.element.querySelector('input[type=text]').value = event.results[0][0].transcript;
      }.bind(this);
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
        <slot />
        {
          this.started === false ?
          (<button onClick={() => this.start()}>
            <img src="../assets/microphone.svg" alt="Start speech recognition button"/>
          </button>)
          :
          (<button onClick={() => this.stop()}>
            <img src="../assets/muted.svg" alt="Stop speech recognition button"/>
          </button>)
        }
      </div>
    );
  }
}
