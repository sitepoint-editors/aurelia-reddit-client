System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _classCallCheck, _createClass, Funny;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Funny = (function () {
        function Funny(http) {
          _classCallCheck(this, Funny);

          this.http = http;
          this.posts = [];
          this.subreddit_url = "http://reddit.com/r/funny.json";
        }

        _createClass(Funny, [{
          key: "loadPosts",
          value: function loadPosts() {
            var _this = this;

            return this.http.jsonp(this.subreddit_url, "jsonp").then(function (r) {
              _this.posts = r.response.data.children;
            });
          }
        }, {
          key: "activate",
          value: function activate() {
            return this.loadPosts();
          }
        }], [{
          key: "inject",
          value: function inject() {
            return [HttpClient];
          }
        }]);

        return Funny;
      })();

      _export("Funny", Funny);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bm55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7aURBRWUsS0FBSzs7OztzQ0FGWixVQUFVOzs7Ozs7Ozs7QUFFSCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLElBQUksRUFBQztnQ0FKTixLQUFLOztBQUtkLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxhQUFhLEdBQUcsZ0NBQWdDLENBQUM7U0FDdkQ7O3FCQVJVLEtBQUs7O2lCQVVQLHFCQUFFOzs7QUFLVCxtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUU1RCxvQkFBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztXQUNKOzs7aUJBR08sb0JBQUU7QUFDUixtQkFBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7V0FDekI7OztpQkF0Qlksa0JBQUc7QUFBRSxtQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1dBQUU7OztlQUY3QixLQUFLOzs7dUJBQUwsS0FBSyIsImZpbGUiOiJmdW5ueS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9