import { Component, State, Prop, Element, Listen } from '@stencil/core';


@Component({
  tag: 'st-voice2text',
  styleUrl: 'st-voice2text.scss'
})
export class Voice2Text {

  @Element() element;

  @Prop() lang       : string  = 'es-ES';
  @Prop() showAlways : boolean = true;

  @State() recognition : any;
  @State() started     : boolean = false;
  @State() existApi    : boolean;

  @Listen('focusin')
  focusOut() {
    if (!this.showAlways) {
      document.getElementById('voice2text').classList.remove('autohide');
    }
  }

  @Listen('focusout')
  focusIn() {
    if (!this.showAlways) {
      document.getElementById('voice2text').classList.add('autohide');
    }
  }

  componentDidLoad() {
    if (!this.showAlways) {
      document.getElementById('voice2text').classList.add('autohide');
    }
    if ('webkitSpeechRecognition' in window) {
      this.existApi = true;
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;

      this.recognition.onerror = function(err) { console.error(err) }
      this.recognition.onresult = function(event) {
        this.element.querySelector('input[type=text]').value = event.results[0][0].transcript;
      }.bind(this);
    } else {
      this.existApi = false;
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
    if (this.existApi) {
      return (
        <div class="container">
          <slot/>
          {
            this.started === false ?
            (<button type="button" id="voice2text" onClick={() => this.start()}>
              <img src="../assets/microphone.svg" alt="Start speech recognition button"/>
            </button>)
            :
            (<button type="button" id="voice2text" onClick={() => this.stop()}>
              <img src="../assets/muted.svg" alt="Stop speech recognition button"/>
            </button>)
          }
        </div>
      );
    }
  }
}
