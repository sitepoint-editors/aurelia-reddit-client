import {Behavior} from 'aurelia-framework';

export class RedditGif {

  static metadata(){
    return Behavior
      .customElement('reddit-gif')
      .withProperty('data');
  }

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
