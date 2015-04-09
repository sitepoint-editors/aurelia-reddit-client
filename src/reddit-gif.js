import {customElement, bindable} from 'aurelia-framework';

@customElement('reddit-gif')
@bindable('data')
export class RedditGif {

  constructor() {
    this.gifActive = false;
  }

  bind() {
    this.gifSrc = '';
  }

  toggleGif() {
    if(this.gifActive) {
      this.gifSrc = '';
    } else {
      this.gifSrc = this.data.url + '#embed';
    }

    this.gifActive = !this.gifActive;
  }
}
