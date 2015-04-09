System.register(["aurelia-router"], function (_export) {
  var Router, _classCallCheck, _createClass, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      App = (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Reddit";

            config.map([{ route: ["", "funny"], moduleId: "funny", nav: true, title: "Funny Subreddit" }, { route: "gifs", moduleId: "gifs", nav: true, title: "Gifs Subreddit" }]);
          });
        }

        _createClass(App, null, [{
          key: "inject",
          value: function inject() {
            return [Router];
          }
        }]);

        return App;
      })();

      _export("App", App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzZDQUVhLEdBQUc7Ozs7OEJBRlIsTUFBTTs7Ozs7Ozs7O0FBRUQsU0FBRztBQUdILGlCQUhBLEdBQUcsQ0FHRixNQUFNLEVBQUM7Z0NBSFIsR0FBRzs7QUFJWixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM5QixrQkFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7O0FBRXhCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxFQUM5RSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBQyxDQUN0RSxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7cUJBYlUsR0FBRzs7aUJBQ0Qsa0JBQUc7QUFBRSxtQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQUU7OztlQUR6QixHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==