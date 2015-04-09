import {customAttribute, bindable, inject} from 'aurelia-framework';
import $ from 'bootstrap';
import bootstrap from 'bootstrap';

@inject(Element)
@customAttribute('popover')
@bindable('title')
@bindable('content')
@bindable('placement')
export class Popover {
  constructor(element) {
    // store it for later use
    this.element = element;
  }

  bind() {
    $(this.element).popover({ title: this.title, placement: this.placement, content: this.content, trigger: 'hover' });
  }

  // gets fired when the provided value changes, although not needed in this example since the json from reddit is static
  titleChanged(newValue){
    $(this.element).data('bs.popover').options.title = newValue;
  }

  contentChanged(newValue){
    $(this.element).data('bs.popover').options.content = newValue;
  }

  placementChanged(newValue){
    $(this.element).data('bs.popover').options.placement = newValue;
  }
}
