System.register(['aurelia-framework'], function (_export) {
  var customElement, bindable, _classCallCheck, _createClass, RedditGif;

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      RedditGif = (function () {
        function RedditGif() {
          _classCallCheck(this, _RedditGif);

          this.gifActive = false;
        }

        _createClass(RedditGif, [{
          key: 'bind',
          value: function bind() {
            this.gifSrc = '';
          }
        }, {
          key: 'toggleGif',
          value: function toggleGif() {
            if (this.gifActive) {
              this.gifSrc = '';
            } else {
              this.gifSrc = this.data.url + '#embed';
            }

            this.gifActive = !this.gifActive;
          }
        }]);

        var _RedditGif = RedditGif;
        RedditGif = customElement('reddit-gif')(RedditGif) || RedditGif;
        RedditGif = bindable('data')(RedditGif) || RedditGif;
        return RedditGif;
      })();

      _export('RedditGif', RedditGif);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGRpdC1naWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs4REFJYSxTQUFTOzs7O3dDQUpkLGFBQWE7bUNBQUUsUUFBUTs7Ozs7Ozs7O0FBSWxCLGVBQVM7QUFFVCxpQkFGQSxTQUFTLEdBRU47OztBQUNaLGNBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztxQkFKVSxTQUFTOztpQkFNaEIsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7V0FDbEI7OztpQkFFUSxxQkFBRztBQUNWLGdCQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDakIsa0JBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2xCLE1BQU07QUFDTCxrQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7YUFDeEM7O0FBRUQsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1dBQ2xDOzs7eUJBbEJVLFNBQVM7QUFBVCxpQkFBUyxHQUZyQixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsU0FBUyxLQUFULFNBQVM7QUFBVCxpQkFBUyxHQURyQixRQUFRLENBQUMsTUFBTSxDQUFDLENBQ0osU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTOzs7MkJBQVQsU0FBUyIsImZpbGUiOiJyZWRkaXQtZ2lmLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=