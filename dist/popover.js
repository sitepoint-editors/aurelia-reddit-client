System.register(['aurelia-framework', 'bootstrap'], function (_export) {
  var customAttribute, bindable, inject, $, bootstrap, _classCallCheck, _createClass, Popover;

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_bootstrap) {
      $ = _bootstrap['default'];
      bootstrap = _bootstrap['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Popover = (function () {
        function Popover(element) {
          _classCallCheck(this, _Popover);

          this.element = element;
        }

        _createClass(Popover, [{
          key: 'bind',
          value: function bind() {
            $(this.element).popover({ title: this.title, placement: this.placement, content: this.content, trigger: 'hover' });
          }
        }, {
          key: 'titleChanged',
          value: function titleChanged(newValue) {
            $(this.element).data('bs.popover').options.title = newValue;
          }
        }, {
          key: 'contentChanged',
          value: function contentChanged(newValue) {
            $(this.element).data('bs.popover').options.content = newValue;
          }
        }, {
          key: 'placementChanged',
          value: function placementChanged(newValue) {
            $(this.element).data('bs.popover').options.placement = newValue;
          }
        }]);

        var _Popover = Popover;
        Popover = inject(Element)(Popover) || Popover;
        Popover = customAttribute('popover')(Popover) || Popover;
        Popover = bindable('title')(Popover) || Popover;
        Popover = bindable('content')(Popover) || Popover;
        Popover = bindable('placement')(Popover) || Popover;
        return Popover;
      })();

      _export('Popover', Popover);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtzRkFTYSxPQUFPOzs7OzBDQVRaLGVBQWU7bUNBQUUsUUFBUTtpQ0FBRSxNQUFNOzs7Ozs7Ozs7Ozs7QUFTNUIsYUFBTztBQUNQLGlCQURBLE9BQU8sQ0FDTixPQUFPLEVBQUU7OztBQUVuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSlUsT0FBTzs7aUJBTWQsZ0JBQUc7QUFDTCxhQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1dBQ3BIOzs7aUJBR1csc0JBQUMsUUFBUSxFQUFDO0FBQ3BCLGFBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1dBQzdEOzs7aUJBRWEsd0JBQUMsUUFBUSxFQUFDO0FBQ3RCLGFBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1dBQy9EOzs7aUJBRWUsMEJBQUMsUUFBUSxFQUFDO0FBQ3hCLGFBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1dBQ2pFOzs7dUJBckJVLE9BQU87QUFBUCxlQUFPLEdBTG5CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FLSCxPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FKbkIsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUlkLE9BQU8sS0FBUCxPQUFPO0FBQVAsZUFBTyxHQUhuQixRQUFRLENBQUMsT0FBTyxDQUFDLENBR0wsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBRm5CLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FFUCxPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FEbkIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUNULE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTzs7O3lCQUFQLE9BQU8iLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9