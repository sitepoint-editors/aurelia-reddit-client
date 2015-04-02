import {Behavior} from 'aurelia-framework';
import $ from 'bootstrap';
import bootstrap from 'bootstrap';

// Export the tooltip as an ES6 class
export class Popover {
  // declare metadata so that Aurelia understand what kind of object this is
  static metadata(){
    return Behavior
      // tell Aurelia that this class is a AttachedBehavior
      .attachedBehavior('popover')
      // and exposes a collection of properties to catch the options for the popover
      .withOptions().and( x => {
        x.withProperty('title', 'titleChanged');
        x.withProperty('content', 'contentChanged');
        x.withProperty('placement', 'placementChanged');
      });
  }

  // Use DI to get hold of the underlying DOM element the AttachedBehavior is attached to
  static inject() { return [Element]; }
  constructor(element) {
    // store it for later use
    this.element = element;
  }

  bind() {
    // initialize the popover
    $(this.element).popover({ title: this.title, placement: this.placement, content: this.content, trigger: 'hover' });
  }

  // gets fired when the provided value changes, although not needed in this example since the json from reddit is static
  textChanged(newValue){
    $(this.element).data('bs.popover').options.title = newValue;
  }

  contentChanged(newValue){
    $(this.element).data('bs.popover').options.content = newValue;
  }

  placementChanged(newValue){
    $(this.element).data('bs.popover').options.placement = newValue;
  }
}
