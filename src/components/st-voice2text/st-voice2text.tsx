import { Component, State, Prop, Element } from '@stencil/core';


@Component({
  tag: 'st-voice2text',
  styleUrl: 'st-voice2text.scss'
})
export class Voice2Text {

  @Element() element;

  @State() recording = false;
  @State() recognition: any = null;

  @Prop() enabled = true;
  @Prop() lang = 'en-US';
  @Prop() continuous = false;

  input: HTMLInputElement;

  componentDidLoad() {
    if ('webkitSpeechRecognition' in window) {
      this.input = this.element.querySelector('input[type=text]');
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = this.continuous;
      this.recognition.interimResults = true;
      this.recognition.lang = this.lang;

      this.recognition.onerror = (err) => {
        console.error(err);
        this.recording = false;
      };
      this.recognition.onresult = (event) => {
        this.input.value = event.results[0][0].transcript;
      };
    }
  }

  start() {
    this.recording = true;
    this.recognition.start();
  }

  stop() {
    this.recording = false;
    this.recognition.stop();
  }

  hostData() {
    return {
      class: {
        'voice2text-enabled': this.recognition !== null && this.enabled,
        'voice2text-recording': this.recording
      }
    };
  }

  render() {
    const dom = [<slot />];
    if (this.recognition) {
      dom.push(
        <button type="button" class="voice2text-start" onClick={() => this.start()}>
          <img src="../assets/microphone.svg" alt="Start speech recognition button" />
        </button>,
        <button type="button" class="voice2text-stop" onClick={() => this.stop()}>
          <img src="../assets/muted.svg" alt="Stop speech recognition button" />
        </button>
      );
    }
    return dom;
  }
}
