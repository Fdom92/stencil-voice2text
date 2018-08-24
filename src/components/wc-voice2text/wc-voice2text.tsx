import { Component, State, Prop, Element } from '@stencil/core';

@Component({
  tag: 'wc-voice2text',
  styleUrl: 'wc-voice2text.css'
})
export class WCVoice2Text {

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
        </button>,
        <button type="button" class="voice2text-stop" onClick={() => this.stop()}>
        </button>
      );
    }
    return dom;
  }
}
