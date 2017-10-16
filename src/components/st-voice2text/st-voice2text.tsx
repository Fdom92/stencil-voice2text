import { Component, State, Prop, Element } from '@stencil/core';


@Component({
  tag: 'st-voice2text',
  styleUrl: 'st-voice2text.scss'
})
export class Voice2Text {

  @Element() element;

  @Prop() lang       : string  = 'en-US';
  @Prop() continuous : boolean = false;

  @State() recognition : any;
  @State() existApi    : boolean;

  componentDidLoad() {
    if ('webkitSpeechRecognition' in window) {
      this.existApi = true;

      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = this.continuous;
      this.recognition.interimResults = true;
      this.recognition.lang = this.lang;

      this.recognition.onerror = function(err) { console.error(err) }
      this.recognition.onresult = function(event) {
        this.element.querySelector('input[type=text]').value = event.results[0][0].transcript;
      }.bind(this);

    } else {
      this.existApi = false;
    }
  }

  start() {
    this.element.querySelector('button.voice2text-start').classList.add('inactive');
    this.element.querySelector('button.voice2text-stop').classList.remove('inactive');
    this.recognition.start();
  }

  stop() {
    this.element.querySelector('button.voice2text-start').classList.remove('inactive');
    this.element.querySelector('button.voice2text-stop').classList.add('inactive');
    this.recognition.stop();
  }

  render() {
    return (
      <div class="container">
        <slot/>
        {this.existApi &&
        <div class="buttons">
          <button type="button" class="voice2text-start" onClick={() => this.start()}>
            <img src="../assets/microphone.svg" alt="Start speech recognition button"/>
          </button>
          <button type="button" class="voice2text-stop inactive" onClick={() => this.stop()}>
            <img src="../assets/muted.svg" alt="Stop speech recognition button"/>
          </button>
        </div>}
      </div>
    );
  }
}
