System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, Funny;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Funny = _export("Funny", (function () {
        function Funny(http) {
          _classCallCheck(this, Funny);

          this.http = http; // Assign the http client for use later
          this.posts = [];
          this.subreddit_url = "http://reddit.com/r/funny.json";
        }

        _createClass(Funny, {
          loadPosts: {
            value: function loadPosts() {
              var _this = this;

              // Aurelia's http client provides us with a jsonp method for
              // getting around CORS issues. The second param is the callback
              // name which reddit requires to be "jsonp"

              return this.http.jsonp(this.subreddit_url, "jsonp").then(function (r) {
                // Assign the list of posts from the json response from reddit
                _this.posts = r.response.data.children;
              });
            }
          },
          activate: {

            // This is called once when the route activates

            value: function activate() {
              return this.loadPosts();
            }
          }
        }, {
          inject: {
            // Dependency inject the HttpClient

            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return Funny;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bm55LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLGlDQUVILEtBQUs7Ozs7QUFGWixnQkFBVSxzQkFBVixVQUFVOzs7Ozs7Ozs7QUFFSCxXQUFLO0FBSUwsaUJBSkEsS0FBSyxDQUlKLElBQUksRUFBQztnQ0FKTixLQUFLOztBQUtkLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGNBQUksQ0FBQyxhQUFhLEdBQUcsZ0NBQWdDLENBQUM7U0FDdkQ7O3FCQVJVLEtBQUs7QUFVaEIsbUJBQVM7bUJBQUEscUJBQUU7Ozs7Ozs7QUFLVCxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsRUFBSTs7QUFFNUQsc0JBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztlQUN2QyxDQUFDLENBQUM7YUFDSjs7QUFHRCxrQkFBUTs7OzttQkFBQSxvQkFBRTtBQUNSLHFCQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUN6Qjs7O0FBdEJNLGdCQUFNOzs7bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFGN0IsS0FBSyIsImZpbGUiOiJmdW5ueS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9