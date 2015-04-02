System.register(["aurelia-framework", "bootstrap"], function (_export) {
  var Behavior, $, bootstrap, _createClass, _classCallCheck, Popover;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_bootstrap) {
      $ = _bootstrap["default"];
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      // Export the tooltip as an ES6 class
      Popover = _export("Popover", (function () {
        function Popover(element) {
          _classCallCheck(this, Popover);

          // store it for later use
          this.element = element;
        }

        _createClass(Popover, {
          bind: {
            value: function bind() {
              // initialize the popover
              $(this.element).popover({ title: this.title, placement: this.placement, content: this.content, trigger: "hover" });
            }
          },
          textChanged: {

            // gets fired when the provided value changes, although not needed in this example since the json from reddit is static

            value: function textChanged(newValue) {
              $(this.element).data("bs.popover").options.title = newValue;
            }
          },
          contentChanged: {
            value: function contentChanged(newValue) {
              $(this.element).data("bs.popover").options.content = newValue;
            }
          },
          placementChanged: {
            value: function placementChanged(newValue) {
              $(this.element).data("bs.popover").options.placement = newValue;
            }
          },
          dynamicPropertyChanged: {

            // or one method to rule them all :)

            value: function dynamicPropertyChanged(propertyName, newValue, oldValue) {
              console.log(propertyName);
            }
          }
        }, {
          metadata: {
            // declare metadata so that Aurelia understand what kind of object this is

            value: function metadata() {
              return Behavior
              // tell Aurelia that this class is a AttachedBehavior
              .attachedBehavior("popover")
              // and exposes a collection of properties to catch the options for the popover
              .withOptions().and(function (x) {
                x.withProperty("title", "titleChanged");
                x.withProperty("content", "contentChanged");
                x.withProperty("placement", "placementChanged");
              });
            }
          },
          inject: {

            // Use DI to get hold of the underlying DOM element the AttachedBehavior is attached to

            value: function inject() {
              return [Element];
            }
          }
        });

        return Popover;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsRUFDVCxDQUFDLEVBQ0QsU0FBUyxpQ0FHSCxPQUFPOzs7O0FBTFosY0FBUSxxQkFBUixRQUFROztBQUNULE9BQUM7QUFDRCxlQUFTOzs7Ozs7Ozs7O0FBR0gsYUFBTztBQWdCUCxpQkFoQkEsT0FBTyxDQWdCTixPQUFPLEVBQUU7Z0NBaEJWLE9BQU87OztBQWtCaEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQW5CVSxPQUFPO0FBcUJsQixjQUFJO21CQUFBLGdCQUFHOztBQUVMLGVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDcEg7O0FBR0QscUJBQVc7Ozs7bUJBQUEscUJBQUMsUUFBUSxFQUFDO0FBQ25CLGVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2FBQzdEOztBQUVELHdCQUFjO21CQUFBLHdCQUFDLFFBQVEsRUFBQztBQUN0QixlQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQzthQUMvRDs7QUFFRCwwQkFBZ0I7bUJBQUEsMEJBQUMsUUFBUSxFQUFDO0FBQ3hCLGVBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQ2pFOztBQUdELGdDQUFzQjs7OzttQkFBQSxnQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUN2RCxxQkFBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMzQjs7O0FBeENNLGtCQUFROzs7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFROztlQUVaLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7ZUFFM0IsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFFLFVBQUEsQ0FBQyxFQUFJO0FBQ3ZCLGlCQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN4QyxpQkFBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM1QyxpQkFBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztlQUNqRCxDQUFDLENBQUM7YUFDTjs7QUFHTSxnQkFBTTs7OzttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7OztlQWYxQixPQUFPIiwiZmlsZSI6InBvcG92ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==